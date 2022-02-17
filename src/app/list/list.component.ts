import { Component, OnInit } from '@angular/core';
import { VACANCY } from '../../assets/data/vacancy';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  vacancy=VACANCY

  constructor() { }

  ngOnInit(): void {
  }

}
