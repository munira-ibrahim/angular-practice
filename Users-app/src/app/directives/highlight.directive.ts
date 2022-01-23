import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[app-highlight]'
})
export class HighlightDirective {

  @Input()
  favcolor : string

  @HostBinding('style.backgroundColor') bgColor : any //for Property Binding

  @HostListener('mouseenter') // for event Binding
  mouseenter(){
    this.bgColor = this.favcolor
  }

  @HostListener('mouseleave')
  mouseleave(){
    this.bgColor = 'whitesmoke'
  }

}
