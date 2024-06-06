import { Component } from '@angular/core';
import { FestivoService } from '../festivo.service';

interface FestivoDTO {
  nombre: string;
  fecha: string;
}

@Component({
  selector: 'app-listar-festivos',
  templateUrl: './listar-festivos.component.html',
  styleUrls: ['./listar-festivos.component.css']
})
export class ListarFestivosComponent {
  year: number;
  festivos: FestivoDTO[];

  constructor(private festivoService: FestivoService) { }

  listarFestivos() {
    this.festivoService.listarFestivos(this.year).subscribe(
      response => this.festivos = response
    );
  }
}