import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAddAttribute]'
})
export class AppAddAttributeDirective implements OnInit {
  @Input() appAddAttribute;

  constructor(private element: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    this.renderer.setAttribute(this.element.nativeElement, this.appAddAttribute, '');
  }
}
