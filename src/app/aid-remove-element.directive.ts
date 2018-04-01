import { Directive, Input, OnChanges, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[aidRemoveElement]'
})
export class AiDRemoveElementDirective implements OnChanges, OnInit {
  @Input() aidRemoveElement;

  constructor(private vc: ViewContainerRef, private template: TemplateRef<any>) {
  }

  ngOnInit() {
    this.vc.createEmbeddedView(this.template);
  }

  ngOnChanges() {
    if (this.aidRemoveElement) {
      this.vc.remove();
    }
  }
}
