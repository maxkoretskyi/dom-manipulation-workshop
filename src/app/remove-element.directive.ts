import { Directive, Input, OnChanges, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRemoveElement]'
})
export class RemoveElementDirective implements OnChanges, OnInit {
  @Input() appRemoveElement;

  constructor(private vc: ViewContainerRef, private template: TemplateRef<any>) {
  }

  ngOnInit() {
    this.vc.createEmbeddedView(this.template);
  }

  ngOnChanges() {
    if (this.appRemoveElement) {
      this.vc.remove();

      // trigger change detection in 3 seconds
      setTimeout(() => {
        console.log('triggering change detection');
      }, 3000);
    }
  }
}
