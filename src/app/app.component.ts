import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
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
export class AiDComponent {
  @ViewChild('vc', {read: ViewContainerRef}) vc: ViewContainerRef;
  component = null;

  constructor(private resolver: ComponentFactoryResolver) {
  }

  show(type) {
    this.component = type === 'a' ? AiDAComponent : AiDBComponent;
    const factory = this.resolver.resolveComponentFactory(this.component);
    this.vc.clear();
    this.vc.createComponent(factory);
  }
}

