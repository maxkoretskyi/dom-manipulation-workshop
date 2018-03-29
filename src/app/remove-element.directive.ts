import { Directive, ElementRef, Input, OnChanges, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRemoveElement]'
})
export class RemoveElementDirective implements OnChanges {
  @Input() appRemoveElement;
  @Input() parentElement;

  constructor(private element: ElementRef, private renderer: Renderer2) {
  }

  ngOnChanges() {
    if (this.appRemoveElement) {
      this.renderer.removeChild(
        this.parentElement.nativeElement,
        this.element.nativeElement
      );

      // trigger change detection in 3 seconds
      setTimeout(() => {
        console.log('triggering change detection');
      }, 3000);
    }
  }
}
