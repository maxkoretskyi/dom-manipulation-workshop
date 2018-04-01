import { Directive, Input, OnChanges, TemplateRef, ViewContainerRef, ViewRef } from '@angular/core';

@Directive({
  selector: '[aidNgIf]'
})
export class AiDNgIfDirective implements OnChanges {
  @Input() aidNgIf;
  view: ViewRef;

  constructor(private vc: ViewContainerRef, private template: TemplateRef<any>) {
    this.view = this.template.createEmbeddedView(null);
  }

  ngOnChanges() {
    if (this.aidNgIf) {
      this.vc.insert(this.view);
    } else {
      this.vc.detach();
    }
  }
}
