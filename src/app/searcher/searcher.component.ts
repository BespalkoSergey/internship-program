import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SearcherComponent {
@Input()
 searchInput:any
  myCount:any
  myPage: any;
  check: any;
  salary: any
}
