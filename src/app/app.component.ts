import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BS2';
  n1: number =5;
  n2: number =2;
  picName:string = "http://xn--12c4bmrju6hc9d9j.com/wp-content/uploads/2015/04/sunflower-vector-design.jpg";

  // Func
  hi(name:string){
    alert("Hi Hi!!"+ name);
  }
}
