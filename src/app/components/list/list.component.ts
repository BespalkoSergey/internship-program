import { VacancyType } from '../../../assets/data/vacancy'
import { Component } from '@angular/core'
import { ListService } from '../../services/list.service'
import { debounceTime, distinctUntilChanged, map, Observable } from 'rxjs'
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [ListService]
})
export class ListComponent {
  public vacancies$: Observable<VacancyType[]>

  public searchInput = new FormControl('')

  constructor(private listService: ListService) {
    this.vacancies$ = this.listService.vacList$

    this.searchInput.valueChanges
      .pipe(
        debounceTime(1000),
        map(value => value.trim()),
        distinctUntilChanged()
      )
      .subscribe(data => {
        listService.setKeywords(data)
      })
  }
}
