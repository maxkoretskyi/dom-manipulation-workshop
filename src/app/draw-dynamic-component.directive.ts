import { ComponentFactoryResolver, Directive, Input, OnChanges, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDrawDynamicComponent]'
})
export class AppDrawDynamicComponentDirective implements OnChanges {
  @Input() appDrawDynamicComponent;

  constructor(private vc: ViewContainerRef, private resolver: ComponentFactoryResolver) {
  }

  ngOnChanges() {
    if (this.appDrawDynamicComponent) {
      this.vc.clear();
      const factory = this.resolver.resolveComponentFactory(this.appDrawDynamicComponent);
      this.vc.createComponent(factory);
    }
  }
}
