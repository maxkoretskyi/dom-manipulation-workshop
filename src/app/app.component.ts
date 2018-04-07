import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'aid-root',
  template: `<span [aidAddAttribute]="'highlight'">I want to be green</span>`,
  styles: ['[highlight] {color: green}']
})
export class AiDComponent {
}
