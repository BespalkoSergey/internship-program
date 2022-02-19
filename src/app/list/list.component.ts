import { Component } from '@angular/core';
import { VACANCY, VacancyType } from 'src/assets/data/vacancy';
import { ListService } from './list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers:[ListService]
})
export class ListComponent  {
  data = VACANCY
  vacancies: VacancyType[] = []

  constructor(private ListService: ListService) {
    this.vacancies = this.ListService.getVacancies() 
   }

  

}
