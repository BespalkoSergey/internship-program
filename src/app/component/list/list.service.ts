import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable} from "rxjs";
import {VacancyType} from "../../../assets/data/vacancy";
import {tap} from "rxjs/operators";

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
}

@Injectable()
export class ListService {

  private apiUrl = 'https://api.rabota.ua/vacancy/search'

  private fetchParams:IParams={
    keyWords:'',
    count:null,
    page:null,
    salary:null,
    noSalary:false
  }
  constructor(private http: HttpClient) {
    this.fetchVacancies().subscribe(()=>{
    })
  }

  public getVacancies(): Observable<ResponseData> {
    return this.fetchVacancies(this.getParam())
  }

  private getParam():any{
    return Object.fromEntries(Object.entries(this.fetchParams).filter(([_, v]) => !!v ));

  }

  public setKeywords(value:string){
    this.fetchParams.keyWords=value
  }
  public setSalary(value:number){
    this.fetchParams.salary=value
  }
  public setCount(value:number){
    this.fetchParams.count=value
  }
  public setPage(value:number){
    this.fetchParams.page=value
  }
  public setCheck(value:boolean){
    this.fetchParams.noSalary=value
  }

  /*private setTotal(value:number){
    this.total=value
    console.log('service total',this.total)
  }*/

 private fetchVacancies(params={}): Observable<ResponseData> {
    return this.http
      .get<ResponseData>(this.apiUrl, {params})
      .pipe(tap(()=>{
        //this.setTotal(el.total)
        }),
       // map(list => list),
      )
  }
}
