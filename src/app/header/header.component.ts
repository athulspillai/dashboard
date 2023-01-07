
import { Component,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
   @Output() issidebarToggle=new EventEmitter()




  sideBarToggle(){
    this.issidebarToggle.emit()
    setTimeout(()=>{
      window.dispatchEvent(
        new Event('resize')
      )
    },300);

  }


}
