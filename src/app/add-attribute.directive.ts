import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[addAttribute]'
})
export class AddAttributeDirective {
  @Input() addAttribute;

  constructor(private element: ElementRef) {
  }

  ngOnInit() {
    this.element.nativeElement.setAttribute(this.addAttribute, '');
  }
}
