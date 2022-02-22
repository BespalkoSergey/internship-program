import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DislikeService } from 'src/app/services/dislike-service';

import { VacancyType } from '../../../assets/data/vacancy';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  isUploadFailed = true;

  isDisliked = false;
  isApply = false;
  isFavorite = false;

  data: VacancyType | null = null;

  constructor(private dislikeService: DislikeService) {}

  @Input() set vacancy(vacancy: VacancyType) {
    this.data = vacancy;
    this.isApply = vacancy.isApply;
    this.isDisliked = this.dislikeService.checkIsDisliked(vacancy.id);
  }

  public applyVacancy() {}

  public setFavorite() {
    this.isFavorite = !this.isFavorite;
  }

  public toggleDislike(): void {
    this.isDisliked = !this.isDisliked;
    this.dislikeService.toggleDislike(this.data?.id || 0);
  }
}
