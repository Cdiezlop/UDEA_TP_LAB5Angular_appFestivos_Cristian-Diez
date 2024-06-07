import { Component } from '@angular/core';
import { FestivoService } from './festivo.service';

interface FestivoDTO {
  nombre: string;
  fecha: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'festivos';
  fecha: string = '';
  year: number = new Date().getFullYear();
  resultado: string = '';
  festivos: FestivoDTO[] = [];

  constructor(private festivoService: FestivoService) { }

  verificarFestivo() {
    this.festivoService.verificarFestivo(this.fecha).subscribe(
      response => this.resultado = response,
      error => this.resultado = 'Fecha inválida'
    );
  }

  listarFestivos() {
    this.festivoService.listarFestivos(this.year).subscribe(
      response => this.festivos = response
    );
  }
}