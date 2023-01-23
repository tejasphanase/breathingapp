import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeditationRoutingModule } from './meditation-routing.module';
import { AllComponent } from './all/all.component';
import { MyfavoriteComponent } from './myfavorite/myfavorite.component';
import { BegineersComponent } from './begineers/begineers.component';
import { StressComponent } from './stress/stress.component';
import { FooternavComponent } from './footernav/footernav.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    AllComponent,
    MyfavoriteComponent,
    BegineersComponent,
    StressComponent,
    FooternavComponent,
    
  ],
  imports: [
    CommonModule,
    MeditationRoutingModule,
    MaterialModule
  ]
})
export class MeditationModule { }
