import { Component, Input } from '@angular/core';
import { VACANCY, VacancyType } from '../../assets/data/vacancy'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  isApply:boolean = false
  isLiked:boolean = false
  isFavorite:boolean = false
  data: VacancyType | null = null
  @Input() set vacancy(vacancy:VacancyType){
    this.data = vacancy
    this.isApply = vacancy.isApply
    this.isLiked = vacancy.isLiked

  }
  constructor() {
  }

  getLink(name: string): string {
    return `https://company-logo-frankfurt.rabota.ua/cdn-cgi/image/w=250/${name}`
  }

  applyVacancy(){

  }

  setFavorite(){
    this.isFavorite = !this.isFavorite
  }

  setDislike(){
    this.isLiked = !this.isLiked
  }
}
