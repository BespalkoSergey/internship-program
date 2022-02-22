import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, map, Observable, switchMap} from "rxjs";
import {VacancyType} from "../../../assets/data/vacancy";
import {tap} from "rxjs/operators";
import {AutocompleteService} from "../../services/autocomplete.service";


export interface ResponseData {
  total: number
  documents: Array<VacancyType>
}
interface IParams {
  keyWords?:string
  count?:number|null
  page?:number|null,
  salary?:number|null,
  noSalary?:boolean
  cityId?:number
}

@Injectable(
  {
    providedIn: 'root'
  }
)
export class ListService {

  total:any

  private apiUrl = 'https://api.rabota.ua/vacancy/search'

  public vacList$=new BehaviorSubject<VacancyType[]>([])

  private params$=new BehaviorSubject<IParams>({})

  public term:any

  constructor(private http: HttpClient) {

    this.params$
      .pipe(
      switchMap(params=>this.fetchVacancies(params)),
      tap(data=> {
        this.total=data.total
        this.vacList$.next(data?.documents)
      })).subscribe()
  }
  public getParams(){
    return this.params$.getValue().cityId
  }
  public setKeywords(value:string){
    const oldParams = this.params$.getValue()
    this.params$.next({ ...oldParams, keyWords: value })
  }
  public setCityId(cityId:number){
    const oldParams = this.params$.getValue()
    this.params$.next({ ...oldParams,cityId})
  }
  public setPage(page:number){
    const oldParams = this.params$.getValue()
    this.params$.next({ ...oldParams, page })
  }
  public setCount(count:number){
    const oldParams = this.params$.getValue()
    this.params$.next({ ...oldParams, count})
  }
  public setSalary(salary:number){
    const oldParams = this.params$.getValue()
    this.params$.next({ ...oldParams, salary })
  }

 private fetchVacancies(params={}): Observable<ResponseData> {
    return this.http
      .get<ResponseData>(this.apiUrl, {params})
      .pipe(map(list => list))
  }

}
