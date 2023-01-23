import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }


  getImages(){
    return this.http.get(`http://localhost:3000/images`)
  }

  getDataById(id:number){  
    return this.http.get(`http://localhost:3000/images/${id}`)
  }

  postFavoriteMeditation(data:any){
    return this.http.post(`http://localhost:3000/favorite`,data)
  }
  getFavoriteData(){
    return this.http.get(`http://localhost:3000/favorite`)
  }
  removeFavriteData(id:any){
    return this.http.delete(`http://localhost:3000/favorite/${id}`)
  }
  melodiSong(){
    return this.http.get(`http://localhost:3000/melodiSong`)
  }
  addMixtureSongs(data:any){  
    return this.http.post(`http://localhost:3000/MixtureSong`,data)
  }
  removeMixtureSong(id:any){
   return this.http.delete(`http://localhost:3000/MixtureSong/${id}`)
  }
  getMistureSongs(){
    return this.http.get(`http://localhost:3000/MixtureSong`)
  }
}
