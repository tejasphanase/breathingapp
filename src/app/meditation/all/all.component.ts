import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent {
  panelOpenState = false;
   meditationData:any=[]
  constructor(private api:ApiService){}
  ngOnInit(){
    this.getData()
  }
  getData(){
    this.api.getImages().subscribe(res=>{
      this.meditationData=res
      console.log(res);
    })
  }
  setFavritData(data:any){
    this.api.postFavoriteMeditation(data).subscribe(res=>{
      console.log(res);
    })
  }
}
