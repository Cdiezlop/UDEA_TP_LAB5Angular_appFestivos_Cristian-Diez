

package apifestivos.apifestivos.presentacion;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import apifestivos.apifestivos.aplicacion.FestivoServicio;
import apifestivos.apifestivos.presentacion.dtos.FestivoDTO;

import java.time.LocalDate;
import java.util.List;


@RestController
@RequestMapping("/api/festivos")
public class FestivoControlador {

    @Autowired
    private FestivoServicio festivoServicio;

    @GetMapping("/verificar")
    public String verificarFestivo(@RequestParam("fecha") String fecha) {
        try {
            LocalDate date = LocalDate.parse(fecha, java.time.format.DateTimeFormatter.ofPattern("dd/MM/yyyy"));
            return festivoServicio.verificarFestivo(date);
        } catch (Exception e) {
            return "Fecha inválida";
        }
    }

    @GetMapping("/listar/{year}")
    public List<FestivoDTO> listarFestivos(@PathVariable int year) {
        return festivoServicio.listarFestivos(year);
    }
}