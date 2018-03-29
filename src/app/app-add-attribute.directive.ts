import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appAddAttribute]'
})
export class AppAddAttributeDirective implements OnInit {
  @Input() appAddAttribute;

  constructor(private element: ElementRef) {
  }

  ngOnInit() {
    this.element.nativeElement.setAttribute(this.appAddAttribute, '');
  }
}
