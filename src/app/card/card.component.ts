import { Component, Input } from '@angular/core';
import { VacancyType } from '../../assets/data/vacancy'


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  
  isLiked = false
  isAplly = false
  isFavorite = false
  isErrorFile = false
  fileName = '';

  data: VacancyType | null = null

  @Input() set vacancy(vacancy:VacancyType){
    this.data = vacancy
    this.isAplly = vacancy.isApply
    this.isLiked = vacancy.isLiked
  }
  

  constructor() {}

  public setFavorite() {
    this.isFavorite = !this.isFavorite
    this.isLiked = false
  }

  public setLiked() {
    this.isLiked = !this.isLiked
    this.isFavorite = false
  }
 public applyVacancy(event:File ){
   if (event.size < 2000000) {
    this.fileName = event.name;
    this.isAplly = true
    this.isErrorFile = false
} else this.isErrorFile = true
 }
}
