import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html'
})
export class FavoriteComponent implements OnInit {
@Input()
isFilled = false

  constructor() { }

  ngOnInit(): void {
  }

}
