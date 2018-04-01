import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'aid-root',
  template: `
    <div class="top">
      <div>top</div>
      <ng-container #top></ng-container>
    </div>
    <div class="bottom">
      <div>bottom</div>
      <ng-container #bottom></ng-container>
    </div>
    <ng-template>
      <aid-a-comp></aid-a-comp>
    </ng-template>
    <button (click)="move()">move</button>
  `,
  styles: ['.top, .bottom {border: 1px solid black; padding: 10px; margin: 10px 0; height: 30px; }']
})
export class AiDComponent implements OnInit {
  @ViewChild(TemplateRef) t;
  @ViewChild('top', {read: ViewContainerRef}) top;
  @ViewChild('bottom', {read: ViewContainerRef}) bottom;

  ngOnInit() {
    this.top.createEmbeddedView(this.t);
  }

  move() {
    if (this.top.length === 0) {
      this.bottom.clear();
      this.top.createEmbeddedView(this.t);
    } else {
      this.top.clear();
      this.bottom.createEmbeddedView(this.t);
    }
  }
}


