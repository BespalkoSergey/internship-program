import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import { map, switchMap, tap } from 'rxjs/operators'
import { VacancyType } from 'src/assets/data/vacancy'

type ResponseData = {
  documents: Array<VacancyType>
}

@Injectable()
export class ListService {
  public count = '100'
  private apiUrl = `https://api.rabota.ua/vacancy/search?count=${this.count}`

  public vacList$ = new BehaviorSubject<VacancyType[]>([])

  private params$ = new BehaviorSubject({})

  private suggestions$ = new BehaviorSubject('')

  constructor(private http: HttpClient) {
    this.params$
      .pipe(
        switchMap(params => this.fetchVacancies(params)),
        tap(data => 
          this.vacList$.next(data?.documents))
      )
      .subscribe()

      
  }

  public setKeywords(value: string): void {
    const oldParams = this.params$.getValue()
    this.params$.next({ ...oldParams, keyWords: value })
  }

  public getSuggestions(value: string) {
    return this.http.get(`https://api.rabota.ua/autocomplete/keyword?term=${value}`).pipe(map(suggestions => suggestions))
  }

  public setUkrainian(value: boolean): void {
    const oldParams = this.params$.getValue()
    this.params$.next({ ...oldParams, ukrainian: !value })
  }

  private fetchVacancies(params = {}): Observable<ResponseData> {
    return this.http.get<ResponseData>(this.apiUrl, { params }).pipe(map(data => data))
  }
}