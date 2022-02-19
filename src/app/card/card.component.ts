import { Component, Input } from '@angular/core';
import { VacancyType } from '../../assets/data/vacancy'



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  // Початкові булі
  isApply:boolean = false
  isLiked:boolean = false
  isFavorite:boolean = false
  isUploadFailed = false
  // Декларуємо дату та миняємо значення булів залежно від данних з вакансії
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
// Подія коли клікають на Откликнутся
  applyVacancy(){
    this.isUploadFailed = true
    this.isApply = !this.isApply
  }
// Подія коли клікають на Зірочку
  setFavorite(){
    this.isFavorite = !this.isFavorite
  }
// Подія коли кликають на Дизлайк
  setLiked(){
    this.isLiked = !this.isLiked
  }
}
