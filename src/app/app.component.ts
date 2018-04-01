import { AfterViewInit, Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'aid-root',
  template: `<span #el>I want to be green</span>`,
  styles: ['[highlight] {color: green}'],
  encapsulation: ViewEncapsulation.None
})
export class AiDComponent implements AfterViewInit {
  @ViewChild('el') span: ElementRef;

  ngAfterViewInit() {
    this.span.nativeElement.setAttribute('highlight', '');
  }
}
