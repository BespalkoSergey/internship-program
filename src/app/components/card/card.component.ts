import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { VacancyType } from '../../../assets/data/vacancy';
import {DislikeService} from '../../services/dislike-service'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
  // Початкові булі
  isApply: boolean = false;
  isDisliked: boolean = false;
  isFavorite: boolean = false;
  isUploadFailed = false;
  // Декларуємо дату та миняємо значення булів залежно від данних з вакансії
  data: VacancyType | null = null;

  constructor(private dislikeService: DislikeService){}

  @Input() set vacancy(vacancy: VacancyType) {
    this.data = vacancy;
    this.isApply = vacancy.isApply;
    this.isDisliked = this.dislikeService.checkIsDisliked(vacancy.id);
  }

  getLink(name: string): string {
    return `https://company-logo-frankfurt.rabota.ua/cdn-cgi/image/w=250/${name}`;
  }
  // Подія коли клікають на Откликнутся
  applyVacancy() {
    this.isUploadFailed = true;
    this.isApply = !this.isApply;
  }
  // Подія коли клікають на Зірочку
  setFavorite() {
    this.isFavorite = !this.isFavorite;
  }
  // Подія коли кликають на Дизлайк
  toggleDislike() {
    this.isDisliked = !this.isDisliked;
    this.dislikeService.toggleDislike(this.data?.id || 0)
  }
}
