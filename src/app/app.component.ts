import { Component, ComponentFactoryResolver, ComponentRef, Injector, OnInit, ViewChild, ViewContainerRef, ViewRef } from '@angular/core';
import { AiDBComponent } from './aid-b-component';
import { AiDAComponent } from './aid-a-component';

@Component({
  selector: 'aid-root',
  template: `
    <button (click)="show('a')">Show A component</button>
    <button (click)="show('b')">Show B component</button>
    <ng-container #vc></ng-container>
  `
})
export class AiDComponent implements OnInit {
  @ViewChild('vc', {read: ViewContainerRef}) vc: ViewContainerRef;
  aComponentRef: ComponentRef<AiDAComponent>;
  bComponentRef: ComponentRef<AiDBComponent>;

  constructor(private resolver: ComponentFactoryResolver, private injector: Injector) {
  }

  ngOnInit() {
    const aComponentFactory = this.resolver.resolveComponentFactory(AiDAComponent);
    const bComponentFactory = this.resolver.resolveComponentFactory(AiDBComponent);
    this.aComponentRef = aComponentFactory.create(this.injector);
    this.bComponentRef = bComponentFactory.create(this.injector);
  }

  show(type) {
    const view = type === 'a' ? this.aComponentRef.hostView : this.bComponentRef.hostView;
    this.vc.detach();
    this.vc.insert(view);
  }
}

