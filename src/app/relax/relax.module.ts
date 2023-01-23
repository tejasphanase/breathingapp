import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelaxRoutingModule } from './relax-routing.module';
import { AllComponent } from './all/all.component';
import { MyFavoriteComponent } from './my-favorite/my-favorite.component';
import { BeginnersComponent } from './beginners/beginners.component';
import { SelfCalmComponent } from './self-calm/self-calm.component';
import { RelaxnavComponent } from './relaxnav/relaxnav.component';


@NgModule({
  declarations: [
    AllComponent,
    MyFavoriteComponent,
    BeginnersComponent,
    SelfCalmComponent,
    RelaxnavComponent
  ],
  imports: [
    CommonModule,
    RelaxRoutingModule
  ]
})
export class RelaxModule { }
