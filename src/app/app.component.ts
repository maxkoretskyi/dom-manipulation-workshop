import { Component } from '@angular/core';
import { AComponent } from './a.component';
import { BComponent } from './b.component';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="show('a')">Show A component</button>
    <button (click)="show('b')">Show B component</button>
  `
})
export class AppComponent {
  show(type) {
    const component = type === 'a' ? AComponent : BComponent;
  }
}

