import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',

})
export class CounterComponent  {

  title = '02-base';
  counter: number = 10;

  contador(num:number):void {
    this.counter +=num;
  }

  reset() {
    this.counter =10;
  }


}



