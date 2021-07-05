import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
      .border-rounded {
        border-radius: 2em;
      }
  `]
})
export class AppComponent {

  public numbers: number[] = [1, 2];

  constructor(){
   
  }

  onRoll(){
    this.numbers[0] = Math.ceil(Math.random() * 6);
    this.numbers[1] = Math.ceil(Math.random() * 6);
  }

}
