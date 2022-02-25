import { VacancyType } from '../../../assets/data/vacancy'
import { Component } from '@angular/core'
import { ListService } from '../../services/list.service'
import { filter, debounceTime, distinctUntilChanged, map, Observable } from 'rxjs'
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [ListService],
})
export class ListComponent {
  public vacancies$: Observable<VacancyType[]>;

  salaryNumber:number;

  totalLength:number;
  page:number = 1;

  public searchInput = new FormControl('');

  public isUkrainian = false;

  public ukrainianCheckbox = new FormControl(false)

  toggleUkrainian():void{
    this.isUkrainian = !this.isUkrainian;
    console.log(this.isUkrainian)
  }

  constructor(private listService: ListService) {
    this.vacancies$ = this.listService.vacList$;

    this.totalLength = parseInt(this.listService.count)

    this.ukrainianCheckbox.valueChanges
    .pipe(distinctUntilChanged())
    .subscribe(() => {
      listService.setUkrainian(this.isUkrainian)
    })

    this.searchInput.valueChanges
    .pipe(
      debounceTime(1000),
      map(value => value.trim()),
      distinctUntilChanged()
    )
    .subscribe((data) => {
      listService.setKeywords(data);
    });
  }

  

}
