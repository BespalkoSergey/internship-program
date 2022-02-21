import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  animations: [
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('300ms', style({ opacity: 0 }))
      ])
    ])
  ],
  styleUrls: ['./error-message.component.css']
})
export class ErrorMessageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
