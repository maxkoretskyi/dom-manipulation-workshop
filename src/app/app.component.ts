import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<span [addAttribute]="'highlight'">I want to be red</span>`,
  styles: ['[highlight] {color: red}']
})
export class AppComponent {
}

