import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllComponent } from './all/all.component';
import { BeginnersComponent } from './beginners/beginners.component';
import { MyFavoriteComponent } from './my-favorite/my-favorite.component';
import { RelaxnavComponent } from './relaxnav/relaxnav.component';
import { SelfCalmComponent } from './self-calm/self-calm.component';

const routes: Routes = [
  {path:'all',component:AllComponent},
  {path:'beginners',component:BeginnersComponent},
  {path:'myfavorite',component:MyFavoriteComponent},
  {path:'self-calm',component:SelfCalmComponent},
  {path:'relax-nav',component:RelaxnavComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelaxRoutingModule { }
