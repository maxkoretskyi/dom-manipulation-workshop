import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { AComponent } from './a.component';
import { BComponent } from './b.component';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="show('a')">Show A component</button>
    <button (click)="show('b')">Show B component</button>
    <ng-container #vc></ng-container>
  `
})
export class AppComponent {
  @ViewChild('vc', {read: ViewContainerRef}) vc: ViewContainerRef;
  component = null;

  constructor(private resolver: ComponentFactoryResolver) {
  }

  show(type) {
    this.component = type === 'a' ? AComponent : BComponent;
    const factory = this.resolver.resolveComponentFactory(this.component);
    this.vc.clear();
    this.vc.createComponent(factory);
  }
}

