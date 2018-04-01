import { Component } from '@angular/core';

@Component({
  selector: 'aid-root',
  template: `
    <div class="top">
      <div>top</div>
      <ng-container></ng-container>
    </div>
    <div class="bottom">
      <div>bottom</div>
      <ng-container></ng-container>
    </div>
    <ng-template>
      <aid-a-comp></aid-a-comp>
    </ng-template>
    <button (click)="move()">move</button>
  `,
  styles: ['.top, .bottom {border: 1px solid black; padding: 10px; margin: 10px 0; height: 30px; }']
})
export class AiDComponent {
  move() {
  }
}


