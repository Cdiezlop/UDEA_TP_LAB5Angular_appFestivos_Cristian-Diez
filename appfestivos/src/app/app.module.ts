import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { AppComponent } from './app.component';
import { VerificarFestivoComponent } from './verificar-festivo/verificar-festivo.component';
import { ListarFestivosComponent } from './listar-festivos/listar-festivos.component';
import { FestivoService } from './festivo.service';

@NgModule({
  declarations: [
    AppComponent,
    VerificarFestivoComponent,
    ListarFestivosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    NgxDatatableModule
  ],
  providers: [FestivoService],
  bootstrap: [AppComponent]
})
export class AppModule { }