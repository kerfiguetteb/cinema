import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FilmsComponent } from './films/films.component';
import { ShowComponent } from './films/show/show.component';
import { NoFoundComponent } from './commons/no-found/no-found.component';

const routes: Routes = [

  {path: 'home', component: HomeComponent},

  {path: 'mes-films', component: FilmsComponent},
  
  {path: 'mes-films/:id', component: ShowComponent},

  { path: '**', component: NoFoundComponent }



  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
