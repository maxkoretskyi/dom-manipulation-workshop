import { Directive, Input, OnChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[aidNgIf]'
})
export class AiDNgIfDirective implements OnChanges {
  @Input() aidNgIf;

  constructor(private vc: ViewContainerRef, private template: TemplateRef<any>) {
  }

  ngOnChanges() {
    if (this.aidNgIf) {
      this.vc.createEmbeddedView(this.template);
    } else {
      this.vc.remove();
    }
  }
}
