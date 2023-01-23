import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllComponent } from './all/all.component';
import { BegineersComponent } from './begineers/begineers.component';
import { FooternavComponent } from './footernav/footernav.component';
import { MyfavoriteComponent } from './myfavorite/myfavorite.component';
import { StressComponent } from './stress/stress.component';

const routes: Routes = [
  {path:'all',component:AllComponent},
  {path:'begineers',component:BegineersComponent},
  {path:'myfavorite',component:MyfavoriteComponent},
  {path:'stress',component:StressComponent},
  {path:'nav',component:FooternavComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeditationRoutingModule { }
