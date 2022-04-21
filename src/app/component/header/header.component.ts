import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {debounceTime, distinctUntilChanged, filter, map, Observable, tap} from "rxjs";
import {ListService} from "../list/list.service";
import {AutocompleteService} from "../../services/autocomplete.service";
import {cityType, DictionaryService, ICity} from "../../services/dictionary.service";
import {town} from "../../../assets/data/vacancy";

interface ITown {
  city:string,
  vacancyCount:number,
  centerId:number
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})



export class HeaderComponent {

  search=new FormControl()
  keyWord:string=''
  name:any//Observable<string[]>
  cities:any
  isData:boolean=false
  towns:ITown[]
  //towns:any

  constructor(private autoService:AutocompleteService,
              private listService:ListService,
              private city:DictionaryService
              ) {

    this.towns=[...new Set(town.filter(el=>el.vacancyCount>0).map(el=> ({
      city:el.ua,
      vacancyCount:el.vacancyCount,
      centerId:el.centerId
    })))]
   /* this.city.fetchCity().subscribe((el:cityType)=>{
      console.log('header',el)
      //this.towns=[...new Set(town.filter(el=>el.vacancyCount>0).map(el=>el.ua))]
      this.towns=[...new Set(town.filter(el=>el.vacancyCount>0).map(el=> ({
        city:el.ua,
        vacancyCount:el.vacancyCount,
        centerId:el.centerId
      })))]
    })*/
    //this.name=this.autoService.vacList$

    this.search.valueChanges
      .pipe(
        tap(el=> this.autoService.termName=el),
        debounceTime(300),
        map(value => value.trim()),
        distinctUntilChanged(),
        tap(()=>{
          this.name=this.autoService.vacList$
        }))
      .subscribe(data => {
        this.autoService.setTerm(data)
        this.keyWord=data
        this.isData=!!data
        // this.listService.setKeywords(data)
      })
  }

  fetchChange(value:string) {
    this.listService.setKeywords(value)
    this.autoService.setTerm('')
    console.log(this.cities)
  }
  searchOnCity(value:any){
    let find = this.towns.find((x:ITown) => x?.city === value.target.value);
    if(find){
      this.listService.setCityId(find?.centerId)
    }
  }
  onBlur() {
      this.autoService.setTerm('')
  }

  onCity(value:any) {
    console.log(value)
    this.listService.setCityId(value)
  }

  emptySearch() {
   // this.listService.setCityId()
  }
}
