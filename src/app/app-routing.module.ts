import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'home/home',pathMatch:'full'},
  {path:'home',loadChildren:()=>import('./home/home.module').then(m=>m.HomeModule)},
  {path:'meditation',loadChildren:()=>import('./meditation/meditation.module').then(m=>m.MeditationModule)},
  {path:'relax',loadChildren:()=>import('./relax/relax.module').then(m=>m.RelaxModule)},
  {path:'melodies',loadChildren:()=>import('./melodies/melodies.module').then(m=>m.MelodiesModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
