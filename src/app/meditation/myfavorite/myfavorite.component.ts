import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-myfavorite',
  templateUrl: './myfavorite.component.html',
  styleUrls: ['./myfavorite.component.scss']
})
export class MyfavoriteComponent {

  FavoritData:any
  constructor(private api:ApiService){}
  ngOnInit(){
   this. getFavoritData(); 
  }
  getFavoritData(){
    this.api.getFavoriteData().subscribe(res=>{
      this.FavoritData=res;
      console.log(res);
    })
  }
  removeFavoriteItem(id:number){
   this.api.removeFavriteData(id).subscribe(res=>{
    this.getFavoritData();
   })
  }
  playSongOnClickImg(event:any){
    event.play()
  }
}
