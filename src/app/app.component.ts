import { Component } from '@angular/core';
import { AiDBComponent } from './aid-b-component';
import { AiDAComponent } from './aid-a-component';

@Component({
  selector: 'aid-root',
  template: `
    <button (click)="show('a')">Show A component</button>
    <button (click)="show('b')">Show B component</button>
    <ng-container [aidRenderDynamicComponent]="component"></ng-container>
  `
})
export class AiDComponent {
  component = null;

  show(type) {
    this.component = type === 'a' ? AiDAComponent : AiDBComponent;
  }
}

