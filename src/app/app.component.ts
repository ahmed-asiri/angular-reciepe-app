import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-project';
  selectedView = 'recipe';

  updateView(view) {
    this.selectedView = view.type;    
  }
  
}
