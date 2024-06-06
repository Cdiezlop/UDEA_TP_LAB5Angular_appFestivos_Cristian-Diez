import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface FestivoDTO {
  nombre: string;
  fecha: string;
}

@Injectable({
  providedIn: 'root'
})
export class FestivoService {
  private apiUrl = 'http://localhost:8080/api/festivos';

  constructor(private http: HttpClient) { }

  verificarFestivo(fecha: string): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/verificar?fecha=${fecha}`);
  }

  listarFestivos(year: number): Observable<FestivoDTO[]> {
    return this.http.get<FestivoDTO[]>(`${this.apiUrl}/listar/${year}`);
  }
}