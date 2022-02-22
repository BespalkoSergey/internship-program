import { Component, Input } from '@angular/core';
import { VacancyType } from '../../assets/data/vacancy'
import {HttpClient} from '@angular/common/http'

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
  

  constructor(private http: HttpClient) {}

  public setFavorite() {
    this.isFavorite = !this.isFavorite
    this.isLiked = false
  }

  public setLiked() {
    this.isLiked = !this.isLiked
    this.isFavorite = false
  }
 public applyVacancy(event:any ){

  const file:File = event.target.files[0];
   if (file.size < 2000000) {
    this.fileName = file.name;
  
    // const formData = new FormData();
    // formData.append("resume", file);
    // const upload$ = this.http.post("/url", formData); 
    this.isAplly = true
    this.isErrorFile = false
} else this.isErrorFile = true
 }
}
