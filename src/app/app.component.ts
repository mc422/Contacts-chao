import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // you can directly write template in here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  name = 'Congrat';
  badMethod = () => {
    return 42;
  };

  showName(){
    return this.name
  }
}
