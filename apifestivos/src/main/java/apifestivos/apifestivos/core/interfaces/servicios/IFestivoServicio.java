package apifestivos.apifestivos.core.interfaces.servicios;

import apifestivos.apifestivos.presentacion.dtos.FestivoDTO;

import java.time.LocalDate;
import java.util.List;

public interface IFestivoServicio {
    String verificarFestivo(LocalDate fecha);
    List<FestivoDTO> listarFestivos(int year);
}
