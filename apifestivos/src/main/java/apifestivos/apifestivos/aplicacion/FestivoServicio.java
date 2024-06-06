

package apifestivos.apifestivos.aplicacion;


import apifestivos.apifestivos.core.entidades.Festivo;
import apifestivos.apifestivos.core.interfaces.repositorios.IFestivoRepositorio;
import apifestivos.apifestivos.core.interfaces.servicios.IFestivoServicio;
import apifestivos.apifestivos.presentacion.dtos.FestivoDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;


@Service
public class FestivoServicio implements IFestivoServicio {

    @Autowired
    private IFestivoRepositorio festivoRepositorio;

    @Override
    public String verificarFestivo(LocalDate fecha) {
        try {
            List<Festivo> festivos = festivoRepositorio.findAll();
            for (Festivo festivo : festivos) {
                LocalDate fechaFestivo = calcularFechaFestivo(festivo, fecha.getYear());
                if (fechaFestivo != null && fechaFestivo.equals(fecha)) {
                    return "Es festivo";
                }
            }
            return "No es festivo";
        } catch (Exception e) {
            throw new FechaInvalidaException("Fecha inválida");
        }
    }

    @Override
    public List<FestivoDTO> listarFestivos(int year) {
        List<Festivo> festivos = festivoRepositorio.findAll();
        return festivos.stream()
                .map(f -> new FestivoDTO(f.getNombre(), calcularFechaFestivo(f, year)))
                .collect(Collectors.toList());
    }

    private LocalDate calcularFechaFestivo(Festivo festivo, int year) {
        if (festivo.getTipo().getId() == 1) { // Fijo
            return LocalDate.of(year, festivo.getMes(), festivo.getDia());
        } else if (festivo.getTipo().getId() == 2) { // Ley Puente Festivo
            LocalDate fecha = LocalDate.of(year, festivo.getMes(), festivo.getDia());
            return fecha.with(java.time.DayOfWeek.MONDAY);
        } else {
            LocalDate pascua = calcularDomingoDePascua(year);
            LocalDate fechaFestivo = pascua.plusDays(festivo.getDiasPascua());
            if (festivo.getTipo().getId() == 4) {
                fechaFestivo = fechaFestivo.with(java.time.DayOfWeek.MONDAY);
            }
            return fechaFestivo;
        }
    }

    private LocalDate calcularDomingoDePascua(int year) {
        int a = year % 19;
        int b = year % 4;
        int c = year % 7;
        int d = (19 * a + 24) % 30;
        int e = (2 * b + 4 * c + 6 * d + 5) % 7;
        int days = d + e;
        return LocalDate.of(year, 3, 15).plusDays(days + 7);
    }
}

