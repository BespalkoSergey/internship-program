import {
  Directive,
  ElementRef,
  HostBinding,
  Input,
  OnChanges,
} from '@angular/core';


@Directive({
  selector: '[appStyleSearch]'
})
export class StyleSearchDirective implements OnChanges{
  @Input() keys:string|null=''
  @Input('appStyleSearch') myText:string|null=''

  @HostBinding("innerHtml")
  content: string='';

  constructor(private el: ElementRef) {}

  ngOnChanges() {

        const text = (this.el.nativeElement as HTMLElement).textContent;
        console.log(text)

    }
}
