import { Component } from '@angular/core';
import { AComponent } from './a-component';
import { BComponent } from './b-component';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="show('a')">Show A component</button>
    <button (click)="show('b')">Show B component</button>
    <ng-container [appDrawDynamicComponent]="component"></ng-container>
  `
})
export class AppComponent {
  component = null;

  show(type) {
    this.component = type === 'a' ? AComponent : BComponent;
  }
}
