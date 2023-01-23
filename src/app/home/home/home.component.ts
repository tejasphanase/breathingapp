import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

 msg:string=''
 public date = new Date();
 time:any
 brethData:any=[]

 constructor(private api:ApiService){}
 ngOnInit(){
  this. getImagesInApi()
  this.getHrs()
 }
 getHrs(){

    let hrs=this.date.getHours();
    this.time=this.date.getTime();
    if(hrs < 12){
      this.msg='Morning'
    }
    else if( hrs >=12 && hrs <= 17 )
    {
      this.msg='Afternoon'
    }
    else if( hrs>=17 && hrs<=21)
    {
      this.msg='Evening..'
    }
    else if( hrs>=21 && hrs <= 24)
    {
      this.msg='Night'
    }
 }

 getImagesInApi(){
  this.api.getImages().subscribe(res=>{
    this.brethData=res
    console.log(res);
  })

 }


}
