import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AdendiRimbaMI2C';
  loadedFeature='cupang';

onNavigate(feature:string){
  this.loadedFeature=feature;
}
}
