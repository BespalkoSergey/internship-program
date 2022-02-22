import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ListService} from './list.service';
import {VacancyType} from "../../../assets/data/vacancy";
import {map, Observable} from "rxjs";
import {FormControl} from "@angular/forms";
import {tap} from "rxjs/operators";


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [ListService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {

  totalLength?: number;
  loading?: boolean;
  page:number=1
  max: number=10;

  searchInput = new FormControl()
  myCount=new FormControl()
  myPage=new FormControl()
  salary=new FormControl()
  check=new FormControl()

  vacancies: Observable<VacancyType[]>

  constructor(private listService: ListService) {

    this.vacancies = this.listService.getVacancies().pipe(tap(el=> this.totalLength = el.total),
      map(el=>el.documents))

    this.searchInput.valueChanges.pipe().subscribe(data => {
      listService.setKeywords(data)
    })
    this.myCount.valueChanges.pipe().subscribe(data=>{
      listService.setCount(data)
    })
    this.myPage.valueChanges.pipe().subscribe(data=>{
      listService.setPage(data)
    })
    this.salary.valueChanges.pipe().subscribe(data=>{
      listService.setSalary(data)
    })
    this.check.valueChanges.pipe(tap(el=>console.log(el))).subscribe(data=>{
      listService.setCheck(data)
    })
  }

  search(): void {
    this.vacancies = this.listService.getVacancies().pipe(tap(el=>{
      this.totalLength = el.total;
    }),
      map(data=>data.documents))
  }

  getPage(page: number) {
    this.loading = true;
    this.listService.setPage(page)
    this.vacancies = this.listService.getVacancies()
      .pipe(
        tap(res => {
          this.totalLength = res.total;
          this.page = page;
          this.loading = false;
        }),
        map(res=> res.documents)
      )

}

}
