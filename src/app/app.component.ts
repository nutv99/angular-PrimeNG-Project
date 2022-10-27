import { Component, VERSION } from '@angular/core';
// import { InputTextModule } from "primeng/inputtext";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
}
