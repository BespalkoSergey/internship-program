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
    keyWords:'',
    cityId:''
  }

  constructor(private http: HttpClient) { 
    
   }
  public getVacancies(): Observable<VacancyType[]>{
    return this.fetchVacancies(this.getParams())
  }

  public setKeywords(value: string){
      this.fetchPamams.keyWords = value
  }
  public setCityId(value: string){
    this.fetchPamams.cityId = value
}
  private getParams(): any {
    console.log(this.fetchPamams);
    
    return this.fetchPamams
    ?{ keyWords: this.fetchPamams.keyWords, cityId: this.fetchPamams.cityId}
    : {};
  }

private fetchVacancies(params = {}):Observable<VacancyType[]>{
  console.log(params);
  
  return this.http
    .get<ResponseData>(this.apiUrl, {params})
    .pipe(map((data) => data?.documents  ))
}
}
