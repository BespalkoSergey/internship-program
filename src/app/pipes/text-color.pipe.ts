import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'HighlightSearch'
})
export class HighlightSearchPipe implements PipeTransform {

  transform(value: any,keyWord: string): any {
    if (!keyWord) {
      return value;
    }

    const reg=new RegExp(keyWord,'gi')
    return value.replace(reg ,'<mark >$&</mark>')

  }
}
