import { Component } from '@angular/core';

@Component({
  selector: 'app-svg-dislike',
  templateUrl: './svg-dislike.component.svg',
  styleUrls: ['./svg-dislike.component.css']
})
export class SvgDislikeComponent {
  strokeColor = 'rgba(252, 82, 82, 1)';
  fillColor = 'rgba(252, 82, 82, 1)';

  changeColor() {
    this.fillColor = 'rgba(252, 82, 82, 1)';
  }
}
