import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[aidAddAttribute]'
})
export class AiDAddAttributeDirective implements OnInit {
  @Input() aidAddAttribute;

  constructor(private element: ElementRef) {
  }

  ngOnInit() {
    this.element.nativeElement.setAttribute(this.aidAddAttribute, '');
  }
}
