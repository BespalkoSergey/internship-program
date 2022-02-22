import {  VacancyType } from './../../assets/data/vacancy';
import { Component, OnInit } from '@angular/core';
import { ListService } from './list.service';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [ListService]
})
export class ListComponent implements OnInit {
  vacancies: Observable<VacancyType[]> 
 searchInput = new FormControl
 sortInput = new FormControl

  constructor(private listService: ListService) {
    this.vacancies = this.listService.getVacancies()
    this.searchInput.valueChanges.subscribe(data=>{
      listService.setKeywords(data)
    })
  this.sortInput.valueChanges.subscribe(data=>{
    listService.setSortBy(data)
  })
   }
   

  ngOnInit(): void {
  }
public search():void {
 this.vacancies=  this.listService.getVacancies()
}

}
