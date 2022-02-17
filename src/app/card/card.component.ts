import { Component, Input, OnInit } from '@angular/core';
import { VacancyType } from 'src/assets/data/vacancy'; 
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent  {
  @Input()
  vacancy: VacancyType | null = null;
  constructor() { }
  
  getLink(name: string): string {
    return `https://company-logo-frankfurt.rabota.ua/cdn-cgi/image/w=250/${name}`
  }
  onClick({target}: MouseEvent):void{ 
    if(target instanceof HTMLImageElement){
      target.src = "/assets/images/staract.png"
    }
    
  }

}
