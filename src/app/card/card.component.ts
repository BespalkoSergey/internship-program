import { Component, Input } from '@angular/core';
import { VacancyType } from '../../assets/data/vacancy'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  isLiked = false
  isApply = false
  isFavorite = false

  data: VacancyType | null = null

  @Input() set vacancy(vacancy: VacancyType) {
    this.data = vacancy
    this.isApply = vacancy.isApply
    this.isLiked = vacancy.isLiked
  }

  constructor() {
  }

  applyVacancy() {

  }

  setFavorite() {
    this.isFavorite = !this.isFavorite
  }

  setLiked() {
    this.isLiked = !this.isLiked
  }
}
