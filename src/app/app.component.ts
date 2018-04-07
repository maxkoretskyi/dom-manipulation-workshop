import { Component, ComponentFactoryResolver, ComponentRef, Injector, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { AiDAComponent } from './aid-a-component';

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
  @ViewChild('top', {read: ViewContainerRef}) top;
  @ViewChild('bottom', {read: ViewContainerRef}) bottom;
  aComponentRef: ComponentRef<AiDAComponent>;

  constructor(private resolver: ComponentFactoryResolver, private injector: Injector) {
  }

  ngOnInit() {
    const factory = this.resolver.resolveComponentFactory(AiDAComponent);
    this.aComponentRef = factory.create(this.injector);
    this.top.insert(this.aComponentRef.hostView);
  }

  move() {
    if (this.top.length === 0) {
      this.bottom.detach();
      this.top.insert(this.aComponentRef.hostView);
    } else {
      this.top.detach();
      this.bottom.insert(this.aComponentRef.hostView);
    }
  }
}


