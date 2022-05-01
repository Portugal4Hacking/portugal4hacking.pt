import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'P4H';
}

//chamar loader
window.addEventListener('load', (event) => {

  setTimeout(function() {
    document.getElementById("loading").style.display  = "none";
  }, 1400);

});