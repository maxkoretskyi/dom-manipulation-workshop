import { AfterViewChecked, Component, ElementRef, TemplateRef, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'aid-root',
  template: `
    <button (click)="remove()">Remove child component</button>
    <ng-container #vc></ng-container>
    <ng-template [aidRemoveElement]="removeElement">
      <aid-a-comp #c></aid-a-comp>
    </ng-template>
  `
})
export class AiDComponent implements AfterViewChecked {
  @ViewChildren('c', {read: ElementRef}) childComps;
  @ViewChild(TemplateRef) template;
  @ViewChild('vc', {read: ViewContainerRef}) vc;
  removeElement = false;

  ngAfterViewChecked() {
    console.log('number of child components: ' + this.childComps.length);
  }

  remove() {
    this.removeElement = true;
  }
}
