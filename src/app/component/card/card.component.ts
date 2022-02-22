import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {VacancyType} from "../../../assets/data/vacancy";


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {

  isLiked = false
  isApply = true
  isFavorite = false
  isError=false
  isHot=false
  url=''
  status={
    text:'text',
    styled:'',
    id:5
  }

  data: VacancyType | null = null

  @Input() set vacancy(vacancy: VacancyType) {
    this.data = vacancy
    this.isApply = vacancy.isApply
    this.isLiked=vacancy.isLiked
  }

  getLink(name: string): string {
    return `https://company-logo-frankfurt.rabota.ua/cdn-cgi/image/w=250/${name}`
  }


  dislike() {
    this.isLiked=!this.isLiked
  }

  favorite() {
    this.isFavorite = !this.isFavorite
  }

  yourOnUploadHandler(file: any) {
    if (!file) {
      console.log('er')
    }
    //console.log(file)
    this.isApply=true
    this.url=file.originalUrl
  }

  yourOnChangeHandler(file: any) {

    file.promise().then((res:any)=>{
      if(res.size>2000000){
        this.isError=true
      }
    }).catch(()=>this.isError=true)
  }


}
