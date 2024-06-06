// listar-festivos.component.ts
import { Component } from '@angular/core';
import { FestivoService } from '../festivo.service';
import { FestivoDTO } from '../models/festivo.dto';

@Component({
  selector: 'app-listar-festivos',
  templateUrl: './listar-festivos.component.html',
  styleUrls: ['./listar-festivos.component.css']
})
export class ListarFestivosComponent {
  year: number;
  festivos: FestivoDTO[];

  constructor(private festivoService: FestivoService) {}

  listarFestivos() {
    this.festivoService.listarFestivos(this.year).subscribe(
      festivos => this.festivos = festivos,
      error => this.festivos = []
    );
  }
}
