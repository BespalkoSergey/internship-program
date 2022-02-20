import { Injectable } from '@angular/core';
import {VACANCIES} from "../../../assets/data/vacancies";


@Injectable()
export class ListService {

  constructor() { }

  getVacancies(){
    return VACANCIES
  }
}
