import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public sliderIndex:number = 1;
  constructor() {}

  next(slide){
    this.sliderIndex = this.sliderIndex<=2?this.sliderIndex+1:this.sliderIndex;
    slide.slideNext();
  }
  prev(slide){
    this.sliderIndex = this.sliderIndex>=2?this.sliderIndex-1:this.sliderIndex;

    slide.slidePrev();

  }
}
