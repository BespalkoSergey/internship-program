import {  VacancyType } from './../../assets/data/vacancies';
import { Component, OnInit } from '@angular/core';
import { ListService } from './list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [ListService]
})
export class ListComponent implements OnInit {

  vacancies:VacancyType[]
 
  constructor(private listService: ListService) {
    this.vacancies = this.listService.getVacancies()
   }

  ngOnInit(): void {
  }

}
