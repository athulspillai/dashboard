import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dashboard';
  sidebar=true
  issidebarToggle(){
    this.sidebar=!this.sidebar
  }
}
