import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { VacancyType } from 'src/assets/data/vacansy';

type ResponseData = {
  documents: Array<VacancyType>;
};

@Injectable()
export class ListService {

  private apiUrl = 'https://api.rabota.ua/vacancy/search'

  private fetchParams = {
    keyWords: ''
  }

  constructor(private http: HttpClient) {}
  

  public getVacancies(): any {
    return this.fetchVacancies(this.getParams())
  }

  public setKeywords(value: string) {
    this.fetchParams.keyWords = value
  }

  private getParams(): any {
    return this.fetchParams.keyWords
    ? { keyWords: this.fetchParams.keyWords }
    : {};
  }

  private fetchVacancies(params = {}): Observable<VacancyType[]> {

  return  this.http
  .get<ResponseData>(this.apiUrl,{ params } )
  .pipe(map((data) => data?.documents))
  }

}
