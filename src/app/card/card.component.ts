import { Component, Input, OnInit } from '@angular/core';
import { VacancyType } from '../../assets/data/vacancy';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  isApply = false;
  isFavourite = false;
  isDislike = false;

@Input()
  vacancy: VacancyType | null=null

  constructor() { }

  getLink(name: string): string {
    return `https://company-logo-frankfurt.rabota.ua/cdn-cgi/image/w=250/${name}`
  }

  getApply() {
    this.isApply=true
  }

  getFavourite() {
    this.isFavourite=!this.isFavourite
  }

  getDislike() {
    this.isDislike=!this.isDislike
  }
}
