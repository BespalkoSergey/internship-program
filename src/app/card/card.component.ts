import { Component, Input, ViewChild } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';
import { UcWidgetComponent } from 'ngx-uploadcare-widget';
import { VacancyType } from '../../assets/data/vacancy';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  animations: [
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('200ms', style({ opacity: 0.5 })),
      ]),
      transition(':leave', [
        animate('200ms', style({ opacity: 0 }))
      ])
    ]),
    trigger('buttonCheckTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('200ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('200ms', style({ opacity: 0 }))
      ])
    ]),
  ],
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  isApply = false;
  isFavourite = false;
  isDislike = false;
  isError=false;
  url=''
  limit=2097152;
  
  @Input()
  vacancy: VacancyType | null=null
  
  @ViewChild(UcWidgetComponent)
  private widget: UcWidgetComponent

  onUpload(info: any) {
    if (info.size < this.limit) {
      this.isApply=true
      this.url=info.cdnUrl 
    } else {
      this.widget.clearable
      this.isError=!this.isError
    }
  }
  
  getApply() {
    this.widget.openDialog();
  }

  getLink(name: string): string {
    return `https://company-logo-frankfurt.rabota.ua/cdn-cgi/image/w=250/${name}`
  }

  getFavourite() {
    this.isFavourite=!this.isFavourite
  }

  getDislike() {
    this.isDislike=!this.isDislike
  }
}
