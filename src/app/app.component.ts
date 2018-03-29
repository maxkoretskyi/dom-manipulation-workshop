import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<span [appAddAttribute]="'highlight'">I want to be green</span>`,
  styles: ['[highlight] {color: green}'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
}
