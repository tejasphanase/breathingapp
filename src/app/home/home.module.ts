import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { MeditationComponent } from './meditation/meditation.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { NgxAudioPlayerModule } from 'ngx-audio-player';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [
    HomeComponent,
    MeditationComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    NgxAudioPlayerModule,
    MatTooltipModule
  ]
})
export class HomeModule { }
