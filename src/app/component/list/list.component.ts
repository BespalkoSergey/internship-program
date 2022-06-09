import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ListService} from './list.service';
import {town, VacancyType} from "../../../assets/data/vacancy";
import {debounceTime, distinctUntilChanged, filter, map, Observable} from "rxjs";
import {FormControl} from "@angular/forms";
import {tap} from "rxjs/operators";
import {AutocompleteService} from "../../services/autocomplete.service";



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {
//mySearch:any
  totalLength?: number;
  loading?: boolean;
  page: number = 1;
  name:any
  cityId:any
  city:any='Hello'

  searchInput = new FormControl()
  myCount = new FormControl('20')
  myPage = new FormControl('1')
  salary = new FormControl()
  check = new FormControl()

 public vacancies: Observable<VacancyType[]>

  constructor(private listService: ListService,
              private autoService:AutocompleteService) {

    this.vacancies = this.listService.vacList$.pipe(
      tap(()=> {
        this.totalLength = this.listService.total
        this.name=this.autoService.termName
       /* this.cityId=this.listService.getParams()
        console.log(this.cityId)
        let find = town.find((x:any) => x?.centerId === this.city);
        console.log(find)
        this.city=find?.ua
        console.log(this.city)*/

      })
      )

/*    this.searchInput.valueChanges
      .pipe(
        debounceTime(1000),
        map(value => value.trim()),
        distinctUntilChanged())
      .subscribe(data => {
        listService.setKeywords(data)
      })*/
  }

   /* this.myCount.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged())
      .subscribe(count => {
        console.log(count)
        listService.setCount(count)
      })

    this.salary.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged())
      .subscribe(data => {
        this.listService.setSalary(data)
      })
  }*/

  search(): void {
  }

  getPage(page: number) {
    this.loading = true;
    this.listService.setPage(page)
    this.vacancies = this.listService.vacList$
      .pipe(
        tap(() => {
          this.totalLength = this.listService.total
          this.page = page;
          this.loading = false;
          console.log(this.city)
        })
      )
  }
}
