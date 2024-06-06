import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerificarFestivoComponent } from './verificar-festivo/verificar-festivo.component';
import { ListarFestivosComponent } from './listar-festivos/listar-festivos.component';

const routes: Routes = [
  { path: 'verificar-festivo', component: VerificarFestivoComponent },
  { path: 'listar-festivos', component: ListarFestivosComponent },
  { path: '', redirectTo: '/verificar-festivo', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }