import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, filter, map, Observable, switchMap, tap} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class AutocompleteService {

  url='https://api.rabota.ua/autocomplete/keyword'
  termName:any

  public vacList$=new BehaviorSubject([])
  public params$=new BehaviorSubject({term:''})

  constructor(private http:HttpClient) {

  this.params$
    .pipe(
      filter((el:any)=>el!==0),
      switchMap(params=>params&&this.fetchAuto(params)),
      tap((data:any)=> this.vacList$.next(data)))
    .subscribe()
  }

  public setTerm(term:string){
    const oldParams = this.params$.getValue()
    this.params$.next({...oldParams,term})
  }

  private fetchAuto(params={}): any {
    return  this.http
      .get<any>(this.url,{params})
      .pipe(
        map(el=>el)
        )
  }
}
