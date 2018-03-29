import { Directive, Input, OnChanges, TemplateRef, ViewContainerRef, ViewRef } from '@angular/core';

@Directive({
  selector: '[appNgIfDirective]'
})
export class AppNgIfDirective implements OnChanges {
  @Input() appNgIfDirective;
  view: ViewRef;

  constructor(private vc: ViewContainerRef, private template: TemplateRef<any>) {
    this.view = this.template.createEmbeddedView(null);
  }

  ngOnChanges() {
    if (this.appNgIfDirective) {
      this.vc.insert(this.view);
    } else {
      this.vc.detach();
    }
  }
}
