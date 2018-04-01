import { ComponentFactoryResolver, Directive, Input, OnChanges, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[aidRenderDynamicComponent]'
})
export class AiDRenderDynamicComponentDirective implements OnChanges {
  @Input() aidRenderDynamicComponent;

  constructor(private vc: ViewContainerRef, private resolver: ComponentFactoryResolver) {
  }

  ngOnChanges() {
    if (this.aidRenderDynamicComponent) {
      this.vc.clear();
      const factory = this.resolver.resolveComponentFactory(this.aidRenderDynamicComponent);
      this.vc.createComponent(factory);
    }
  }
}
