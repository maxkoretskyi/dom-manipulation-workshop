import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef, QueryList,
  TemplateRef,
  ViewChild,
  ViewChildren,
  ViewContainerRef
} from '@angular/core';

@Component({
  selector: 'aid-root',
  template: `
    <button (click)="remove()">Remove child component</button>
    <ng-container #vc></ng-container>
    <ng-template>
      <aid-a-comp #c></aid-a-comp>
    </ng-template>
  `
})
export class AiDComponent implements AfterViewChecked, AfterViewInit {
  @ViewChildren('c', {read: ElementRef}) childComps: QueryList<ElementRef>;
  @ViewChild(TemplateRef) template: TemplateRef<null>;
  @ViewChild('vc', {read: ViewContainerRef}) vc: ViewContainerRef;

  ngAfterViewInit() {
    this.vc.createEmbeddedView(this.template);
  }

  ngAfterViewChecked() {
    console.log('number of child components: ' + this.childComps.length);
  }

  remove() {
    this.vc.remove();
  }
}
