import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MelodiesRoutingModule } from './melodies-routing.module';
import { AllComponent } from './all/all.component';
import { NatureComponent } from './nature/nature.component';
import { MusicalComponent } from './musical/musical.component';
import { CategoryComponent } from './category/category.component';
import { MelodinavComponent } from './melodinav/melodinav.component';
import { CircleShadowDirective } from '../directivs/circle-shadow.directive';

@NgModule({
  declarations: [
    AllComponent,
    NatureComponent,
    MusicalComponent,
    CategoryComponent,
    MelodinavComponent,
    CircleShadowDirective,
   
  ],
  imports: [
    CommonModule,
    MelodiesRoutingModule,
    
  
  ]
})
export class MelodiesModule { }
