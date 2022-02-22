import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VACANCIES, VacancyType } from 'src/assets/data/vacancies';
import { map, Observable, tap } from 'rxjs';

type ResponseData = {
  documents: Array<VacancyType>
}

@Injectable()
export class ListService {
private apiURL = 'https://api.rabota.ua/vacancy/search'

private fetchParams = {
  keyWords: '',
  sortBy: ''
}
  constructor(private http: HttpClient) {
    // this.fetchVacancies().subscribe((data:any) =>{
    //   console.log(data)
    // })
   }

 public getVacancies():any{
 
    return this.fetchVacancies(this.fetchParams)
  }

  public setKeywords(value:string){
this.fetchParams.keyWords = value
  }
public setSortBy(value:string){
  this.fetchParams.sortBy = value
}

// private getParams():any {
// return this.fetchParams.keyWords ? {keyWords :this.fetchParams.keyWords}:{}
// }

  private fetchVacancies(params={}):Observable<any[]> {
   return this.http.get<ResponseData>(this.apiURL,{params}).pipe(
      map(data=>data?.documents)
    )
  }
}
