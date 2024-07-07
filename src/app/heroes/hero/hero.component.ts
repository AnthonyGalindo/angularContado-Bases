import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'Ultra Man';
  public  age: number = 45;
  visible : boolean = false;
  autor:string = 'Anthony' ;



  changeName(){
    this.name = 'Superman'
  }

  get nameUpper():string {
    return `${this.name.toUpperCase()}`
  }

 metodoDes():string {
  return `${this.name} - ${this.age} - ${this.autor} `
 }

 changeAge():void {
  this.age = 27
 }

 reset() {
 this.name = 'Ultra Man';
 this.age = 45;
  }


}
