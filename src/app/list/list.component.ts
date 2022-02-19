import { Component, OnInit } from '@angular/core';
import { VACANCY, VacancyType } from 'src/assets/data/vacancy';
import { ListService } from './list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [ListService]
})
export class ListComponent {

  vacancy = VACANCY

  vacancies: VacancyType[] = []

  constructor(private listService:ListService) { 
    this.vacancies = this.listService.getVacancies()
  }



}
