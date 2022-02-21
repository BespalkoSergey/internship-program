import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { VACANCY, VacancyType } from 'src/assets/data/vacansy';
import { ListService } from './list.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [ListService]
})
export class ListComponent {

  vacancy = VACANCY
  vacancies:  Observable<VacancyType[]>

  public searchInput = new FormControl('');

  constructor(private listService: ListService) {
    this.vacancies = this.listService.getVacancies()
    this.searchInput.valueChanges.subscribe((data) => {
      listService.setKeywords(data)
    })
   }
   
   public search(): void {
     this.vacancies = this.listService.getVacancies();
   }

}
