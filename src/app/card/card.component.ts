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

  data: VacancyType | null = null

  @Input() set vacancy(vacancy:VacancyType){
    this.data = vacancy
    this.isAplly = vacancy.isApply
    this.isLiked = vacancy.isLiked
  }

  constructor() {
  }
  public setFavorite() {
    this.isFavorite = !this.isFavorite
  }

  public setLiked() {
    this.isLiked = !this.isLiked
  }
 public applyVacancy(){
   this.isAplly = true
 }
}
