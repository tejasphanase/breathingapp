import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports:[
            MatCardModule,
            MatButtonModule,
            MatExpansionModule

          ]
})
export class MaterialModule { }
