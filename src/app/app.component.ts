import { AfterViewInit, Component, } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements AfterViewInit {
  

  ngAfterViewInit() {
   fromEvent(document.querySelector("#sendMessage"), 'click')
   .pipe()
   .subscribe({
     next: data => console.log(data),
     error: error => console.log(error)
   }
   )
  }

}
