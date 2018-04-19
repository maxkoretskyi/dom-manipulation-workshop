import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<span #el>I want to be red</span>`,
  styles: ['[highlight] {color: red}']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('el') span: ElementRef;

  ngAfterViewInit() {
    this.span.nativeElement.setAttribute('highlight', '');
  }
}

