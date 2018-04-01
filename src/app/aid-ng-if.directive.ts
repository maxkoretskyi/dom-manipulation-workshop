import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[aidNgIf]'
})
export class AiDNgIfDirective {
  @Input() aidNgIf;
}
