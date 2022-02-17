import { Component } from '@angular/core';

@Component({
  selector: 'app-svg-fav',
  templateUrl: './svg-fav.component.svg',
  styleUrls: ['./svg-fav.component.css']
})
export class SvgFavComponent {
  fillColor = 'rgba(0, 0, 0, 0)';

  changeColor() {
    this.fillColor = 'rgba(252, 82, 82, 1)';
  }
}
