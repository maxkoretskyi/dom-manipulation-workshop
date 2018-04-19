import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[addAttribute]'
})
export class AddAttributeDirective implements OnInit {
  @Input() addAttribute;

  constructor(private element: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    this.renderer.setAttribute(this.element.nativeElement, this.addAttribute, '');
  }
}
