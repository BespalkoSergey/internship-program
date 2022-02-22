import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
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
  vacancies: Observable<VacancyType[]>
  searchInput = new FormControl('')
  cityInput = new FormControl('')

  constructor(private ListService: ListService) {
    this.vacancies = this.ListService.getVacancies()
    this.searchInput.valueChanges.subscribe((data)=>{
      console.log(data);
      ListService.setKeywords(data)
      
    }) 
    this.cityInput.valueChanges.subscribe((data)=>{
      console.log(data);
      ListService.setCityId(data)
      
    }) 
   }
public search() :any{
  this.vacancies = this.ListService.getVacancies()
  
}
  

}
