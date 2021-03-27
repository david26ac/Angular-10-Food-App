import { SavedComponent } from './saved/saved.component';
import { MainComponent } from './main/main.component';
import { Page404Component } from './page404/page404.component';
import { RecetasComponent } from './recetas/recetas.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VerComponent } from './ver/ver.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'recetas/saved', component : SavedComponent},
  {path: 'receta/:id', component : VerComponent},
  {path: '**', component : Page404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
