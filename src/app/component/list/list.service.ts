import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {VacancyType} from "../../../assets/data/vacancy";

interface ResponseData {
  documents: Array<VacancyType>
}

@Injectable()
export class ListService {

  private apiUrl = 'https://api.rabota.ua/vacancy/search'

  private fetchParams={
    keyWords:'',
    count:20
  }
  constructor(private http: HttpClient) {
    this.fetchVacancies().subscribe((data:any)=>{
      console.log(data)
    })
  }

  public getVacancies(): Observable<VacancyType[]> {
    return this.fetchVacancies(this.fetchParams)
  }

  private getParam():any{
    return this.fetchParams.keyWords? { keyWords:''}:{}
  }

  public setKeywords(value:string){
    this.fetchParams.keyWords=value
  }

  public setCount(value:number){
    this.fetchParams.count=value
  }

 private fetchVacancies(params={}): Observable<VacancyType[]> {
    return this.http
      .get<ResponseData>(this.apiUrl, {params})
      .pipe(map(list => list?.documents))
  }
}
