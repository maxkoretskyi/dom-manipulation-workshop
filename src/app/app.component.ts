import { Component, ComponentFactoryResolver, ComponentRef, Injector, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
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
export class AppComponent implements OnInit {
  @ViewChild('vc', {read: ViewContainerRef}) vc: ViewContainerRef;
  aComponentRef: ComponentRef<AComponent>;
  bComponentRef: ComponentRef<BComponent>;

  constructor(private resolver: ComponentFactoryResolver, private injector: Injector) {
  }

  ngOnInit() {
    const aComponentFactory = this.resolver.resolveComponentFactory(AComponent);
    const bComponentFactory = this.resolver.resolveComponentFactory(BComponent);
    this.aComponentRef = aComponentFactory.create(this.injector);
    this.bComponentRef = bComponentFactory.create(this.injector);
  }

  show(type) {
    const view = type === 'a' ? this.aComponentRef.hostView : this.bComponentRef.hostView;
    this.vc.detach();
    this.vc.insert(view);
  }
}

