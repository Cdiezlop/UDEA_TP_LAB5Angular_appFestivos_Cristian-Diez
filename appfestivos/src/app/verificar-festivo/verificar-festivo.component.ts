// verificar-festivo.component.ts
import { Component } from '@angular/core';
import { FestivoService } from '../festivo.service';

@Component({
  selector: 'app-verificar-festivo',
  templateUrl: './verificar-festivo.component.html',
  styleUrls: ['./verificar-festivo.component.css']
})
export class VerificarFestivoComponent {
  fecha: string;
  mensaje: string;

  constructor(private festivoService: FestivoService) {}

  verificarFestivo() {
    this.festivoService.verificarFestivo(this.fecha).subscribe(
      mensaje => this.mensaje = mensaje,
      error => this.mensaje = 'Fecha inválida'
    );
  }
}