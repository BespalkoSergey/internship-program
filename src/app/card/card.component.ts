import { Component, Input} from '@angular/core';
import { VacancyType } from 'src/assets/data/vacansy';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  uploadCare = false;
  isLiked = false;
  isFavorit = false;


  @Input()
  data: VacancyType | null = null

  constructor() { }

  getLink(name: string): string {
    return `https://company-logo-frankfurt.rabota.ua/cdn-cgi/image/w=250/${name}`
  }

  onFavorite() {
    this.isFavorit = !this.isFavorit
    this.isLiked = false

  }

  public onLike(){
    this.isLiked = !this.isLiked
    this.isFavorit = false
  }

  public onUpload(){
    this.uploadCare = !this.uploadCare
  }

}
