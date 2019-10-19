import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string = 'Brad';
  age:number = 39;

  constructor(){
    this.changeName('John');
  }

changeName(name:string):void {
  this.name = name;

}
}
