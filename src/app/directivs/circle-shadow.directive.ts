import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCircleShadow]'
})
export class CircleShadowDirective {
  constructor(private e1:ElementRef){}
  isPlaying=false
  @HostListener('click') onMouseClick() 
  {
    this.isPlaying =!this.isPlaying
    if(this.isPlaying){
      this.e1.nativeElement.style.boxShadow="inset 0 0 15px 15px #74c0fc" 
    }
    else{
      this.e1.nativeElement.style.boxShadow="none" 
    }
  }
  // @HostListener('mouseenter') onMouseEnter() {
  //   this.e1.nativeElement.style.backgroundColor="red" 
  // }
}
