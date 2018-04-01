import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[aidRenderDynamicComponent]'
})
export class AiDRenderDynamicComponentDirective {
  @Input() aidRenderDynamicComponent;
}
