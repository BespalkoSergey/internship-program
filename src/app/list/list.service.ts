import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { VACANCIES } from 'src/assets/data/vacancies';
import { VacancyType } from 'src/assets/data/vacancy';

type ResponseData = {
  documents: VacancyType[]
}


@Injectable()
export class ListService {

  private apiUrl = 'https://api.rabota.ua/vacancy/search'

  private fetchPamams = {
    keyWords:''
  }

  constructor(private http: HttpClient) { 
    
   }
  public getVacancies(): Observable<VacancyType[]>{
    return this.fetchVacancies(this.getParams())
  }

  public setKeywords(value: string){
      this.fetchPamams.keyWords = value
  }

  private getParams(): any {
    return this.fetchPamams.keyWords
    ?{ keyWords: this.fetchPamams.keyWords}
    : {};
  }

private fetchVacancies(params = {}):Observable<VacancyType[]>{
  return this.http
    .get<ResponseData>(this.apiUrl, {params})
    .pipe(map((data) => data?.documents  ))
}
}
