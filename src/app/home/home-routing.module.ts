import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MeditationComponent } from './meditation/meditation.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'meditation/:id',component:MeditationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
