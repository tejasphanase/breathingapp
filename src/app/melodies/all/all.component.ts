import { Component, ElementRef, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent {
 // @ViewChild('audio', { static: true }) audio!: ElementRef<HTMLAudioElement>;
  panelOpenState = false;
  audios:any
  mixtureSong:any
  constructor(private api:ApiService){}
  ngOnInit(){
    this. getAudios()
    this. getMistureSongs()
  }
  isPlaying=false
  togglePlay(event:any,data:any) {
    console.log(data);
    this.isPlaying = !this.isPlaying;
    if (this.isPlaying) {
      this.api.addMixtureSongs(data).subscribe(res=>{})
      this. getMistureSongs()
       event.play();
  } else { 
        this.api.removeMixtureSong(data.id).subscribe(res=>{})      
        event.pause();
        this. getMistureSongs()
  }
}
  getAudios(){
    this.api.melodiSong().subscribe(res=>{
      this.audios=res
    })
 }
 getMistureSongs(){
    this.api.getMistureSongs().subscribe(res=>{
      this.mixtureSong=res
      console.log(this.mixtureSong);
    })
 }  
 }