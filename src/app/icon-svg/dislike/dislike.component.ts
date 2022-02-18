import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dislike',
  templateUrl: './dislike.component.html'
})
export class DislikeComponent implements OnInit {
@Input()
isFilled = false
  constructor() { }

  ngOnInit(): void {
  }

}
