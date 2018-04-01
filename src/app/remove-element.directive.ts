import { Directive, ElementRef, Input, OnChanges, Renderer2 } from '@angular/core';

@Directive({
  selector: '[aidRemoveElement]'
})
export class AiDRemoveElementDirective implements OnChanges {
  @Input() aidRemoveElement;
  @Input() parentElement;

  constructor(private element: ElementRef, private renderer: Renderer2) {
  }

  ngOnChanges() {
    if (this.aidRemoveElement) {
      this.renderer.removeChild(
        this.parentElement.nativeElement,
        this.element.nativeElement
      );
    }
  }
}
