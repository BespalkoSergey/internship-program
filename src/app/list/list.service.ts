import { Injectable } from '@angular/core';
import { VACANCIES } from 'src/assets/data/vacancies';

@Injectable()
export class ListService {

  constructor() { }

  getVacancies(){
    return VACANCIES
  }
}
