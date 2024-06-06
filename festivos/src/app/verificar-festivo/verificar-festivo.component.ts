import { Component } from '@angular/core';
import { FestivoService } from '../festivo.service';

@Component({
  selector: 'app-verificar-festivo',
  templateUrl: './verificar-festivo.component.html',
  styleUrls: ['./verificar-festivo.component.css']
})
export class VerificarFestivoComponent {
  fecha: string;
  resultado: string;

  constructor(private festivoService: FestivoService) { }

  verificarFestivo() {
    this.festivoService.verificarFestivo(this.fecha).subscribe(
      response => this.resultado = response,
      error => this.resultado = 'Fecha inválida'
    );
  }
}
