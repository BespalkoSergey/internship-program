import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';


import { VacancyType } from '../../assets/data/vacancy';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  animations: [
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('200ms', style({ opacity: 0.5 })),
      ]),
      transition(':leave', [
        animate('200ms', style({ opacity: 0 }))
      ])
    ]),
    trigger('buttonCheckTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('200ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('200ms', style({ opacity: 0 }))
      ])
    ]),
  ],
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  isApply = false;
  isFavourite = false;
  isDislike = false;
  
  
  @Input()
  vacancy: VacancyType | null=null
  
  getLink(name: string): string {
    return `https://company-logo-frankfurt.rabota.ua/cdn-cgi/image/w=250/${name}`
  }

  getApply() {
    this.isApply=!this.isApply
  }

  getFavourite() {
    this.isFavourite=!this.isFavourite
  }

  getDislike() {
    this.isDislike=!this.isDislike
  }
}
