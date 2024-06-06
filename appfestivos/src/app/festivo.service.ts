// festivo.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FestivoService {
  private apiUrl = 'http://localhost:8080/api/festivos'; // URL de la API

  constructor(private http: HttpClient) {}

  verificarFestivo(fecha: string): Observable<string> {
    let params = new HttpParams().set('fecha', fecha);
    return this.http.get<{ mensaje: string }>(`${this.apiUrl}/verificar`, { params }).pipe(
      map(response => response.mensaje)
    );
  }

  listarFestivos(year: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/listar/${year}`);
  }
}
