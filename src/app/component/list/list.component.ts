import {Component} from '@angular/core';
import {ListService} from './list.service';
import {VacancyType} from "../../../assets/data/vacancy";
import {Observable} from "rxjs";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [ListService]
})
export class ListComponent {

  vacancies: Observable<VacancyType[]>

  searchInput = new FormControl()
  myCount=new FormControl()


  constructor(private listService: ListService) {
    this.vacancies = this.listService.getVacancies()

    this.searchInput.valueChanges.pipe().subscribe(data => {
      listService.setKeywords(data)
      console.log(data)
    })

    this.myCount.valueChanges.pipe().subscribe(data=>{
      listService.setCount(data)

    })
  }

  search(): void {
    this.vacancies = this.listService.getVacancies()
  }
}
