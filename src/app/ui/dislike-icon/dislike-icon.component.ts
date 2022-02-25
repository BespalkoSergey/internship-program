import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dislike-icon',
  templateUrl: './dislike-icon.component.html',
  styleUrls: ['./dislike-icon.component.css']
})
export class DislikeIconComponent implements OnInit {
  @Input()
  isFilled = false

  constructor() { }

  ngOnInit(): void {
  }

}
