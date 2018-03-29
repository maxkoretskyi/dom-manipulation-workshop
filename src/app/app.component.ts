import { AfterViewInit, Component, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<span #el>I want to be green</span>`,
  styles: ['[highlight] {color: green}'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit {
  @ViewChild('el') span;

  ngAfterViewInit() {
    this.span.nativeElement.setAttribute('highlight', '');
  }
}
