import {Injectable} from '@angular/core';
import {tap} from "rxjs";
import {HttpClient} from "@angular/common/http";


export interface locativeNameItem {
	ru: string;
	ua: string;
}

export interface regionNameItem {
	ru: string;
	ua: string;
}

export interface cityType {
	centerId: number;
	vacancyCount: number;
	ru: string;
	locativeName: locativeNameItem;
	regionName: regionNameItem;
	en: string;
	id: number;
	ua: string;
	centerName: string;
}
export interface ICity {
  id:number;
  city:string
}


@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  private url='https://api.rabota.ua/dictionary/city'

  //public city$=new BehaviorSubject([])
  constructor(private http:HttpClient) {

  }
  getDic(){
    return this.fetchCity().pipe(tap(el=>{
      console.log('get',el)
    }))
  }

  public fetchCity():any{
    return this.http.get<cityType[]>(this.url)
      .pipe()
  }
}
