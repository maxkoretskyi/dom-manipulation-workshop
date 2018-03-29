import { Directive, Input, OnChanges, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appNgIfDirective]'
})
export class AppNgIfDirective implements OnChanges {
  @Input() appNgIfDirective;

  constructor(private vc: ViewContainerRef, private template: TemplateRef<any>) {
  }

  ngOnChanges() {
    if (this.appNgIfDirective) {
      this.vc.createEmbeddedView(this.template);
    } else {
      this.vc.remove();
    }
  }
}
