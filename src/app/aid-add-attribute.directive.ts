import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[aidAddAttribute]'
})
export class AiDAddAttributeDirective implements OnInit {
  @Input() aidAddAttribute;

  constructor(private element: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    this.renderer.setAttribute(this.element.nativeElement, this.aidAddAttribute, '');
  }
}
