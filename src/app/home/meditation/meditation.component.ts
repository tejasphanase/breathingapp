import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Track } from 'ngx-audio-player';  

@Component({
  selector: 'app-meditation',
  templateUrl: './meditation.component.html',
  styleUrls: ['./meditation.component.scss']
})
export class MeditationComponent {

  msaapDisplayTitle = true;
  msaapDisplayPlayList = true;
  msaapPageSizeOptions = [2,4,6];
  msaapDisplayVolumeControls = true;
  msaapDisplayRepeatControls = true;
  msaapDisplayArtist = false;
  msaapDisplayDuration = false;
  msaapDisablePositionSlider = true;

  msaapPlaylist: Track[] = [
    {
      title: 'Audio One Title',
      link: 'Link to Audio One URL',
      artist: 'Audio One Artist',
    
    },
    {
      title: 'Audio Two Title',
      link: 'Link to Audio Two URL',
      artist: 'Audio Two Artist',
    
    },
    {
      title: 'Audio Three Title',
      link: 'Link to Audio Three URL',
      artist: 'Audio Three Artist',

    },
  ];
  meditationDetails:any;
 
  constructor(private route:ActivatedRoute, private api:ApiService){}
  ngOnInit(){
    this.getActiveUrlId()
  }
  getActiveUrlId(){   
    this.route.params.subscribe(res=>{
      let id =res['id']
      this.getdataById(id)
    })
  }
 
  getdataById(id:number){
    this.api.getDataById(id).subscribe(res=>{
      this.meditationDetails=res;
      console.log(res);
    })
  }
}
