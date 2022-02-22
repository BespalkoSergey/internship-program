import { Component, Input, OnInit } from '@angular/core';
import { VacancyType } from 'src/assets/data/vacancy'; 
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent  {
  isLiked = false;
  isDislike = false;
  isUpload = false;

  @Input()
  data: VacancyType | null = null;
  constructor() { }
  
  getLink(name: string): string {
    return `https://company-logo-frankfurt.rabota.ua/cdn-cgi/image/w=250/${name}`
  }
  onLike():void{ 
    this.isLiked = !this.isLiked;
    this.isDislike = false;
    
    
  }
  onDislike():void{
    this.isDislike = !this.isDislike;
    this.isLiked = false;

  }
  onUpload():void{
    this.isUpload = !this.isUpload;
    setTimeout(()=>{
      this.isUpload = false;
    },2000)
  }

}
