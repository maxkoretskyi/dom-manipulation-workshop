import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="top">
      <div>top</div>
      <ng-container [ngTemplateOutlet]="leftT"></ng-container>
    </div>
    <div class="bottom">
      <div>bottom</div>
      <ng-container [ngTemplateOutlet]="rightT"></ng-container>
    </div>
    <ng-template>
      <app-a-comp></app-a-comp>
    </ng-template>
    <button (click)="move()">move</button>
  `,
  styles: ['.top, .bottom {border: 1px solid black; padding: 10px; margin: 10px 0; height: 30px; }']
})
export class AppComponent implements OnInit {
  @ViewChild(TemplateRef) t;
  leftT = null;
  rightT = null;

  ngOnInit() {
    this.leftT = this.t;
  }

  move() {
    if (this.leftT) {
      this.leftT = null;
      this.rightT = this.t;
    } else {
      this.leftT = this.t;
      this.rightT = null;
    }
  }
}
