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
  private apiUrl = `https://api.rabota.ua/vacancy/search`

  public vacList$ = new BehaviorSubject<VacancyType[]>([])

  private params$ = new BehaviorSubject({})

  constructor(private http: HttpClient) {
    this.params$
      .pipe(
        switchMap(params => this.fetchVacancies(params)),
        tap(data => this.vacList$.next(data?.documents))
      )
      .subscribe()
  }

  public setKeywords(value: string): void {
    const oldParams = this.params$.getValue()
    this.params$.next({ ...oldParams, keyWords: value })
  }

  private fetchVacancies(params = {}): Observable<ResponseData> {
    return this.http.get<ResponseData>(this.apiUrl, { params }).pipe(map(data => data))
  }
}
