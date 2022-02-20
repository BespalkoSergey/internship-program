import { Component } from '@angular/core';
import { ListService } from './list.service';
import {VacancyType} from "../../../assets/data/vacancy";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [ListService]
})
export class ListComponent {
  vacancies: VacancyType[] = []

  constructor(private listService: ListService) {
    this.vacancies = this.listService.getVacancies()
  }
}
