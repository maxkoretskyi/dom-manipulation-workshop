import { Component } from '@angular/core';

@Component({
  selector: 'aid-root',
  template: `
    <button (click)="show()">Show child component</button>
    <button (click)="remove()">Remove child component</button>
    <ng-template [aidNgIf]="showChildComponent">
      <aid-a-comp></aid-a-comp>
    </ng-template>
  `
})
export class AiDComponent {
  showChildComponent = true;

  show() {
    this.showChildComponent = true;
  }

  remove() {
    this.showChildComponent = false;
  }
}

