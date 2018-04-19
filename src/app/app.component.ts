import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  TemplateRef,
  ViewChild,
  ViewChildren,
  ViewContainerRef
} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="remove()">Remove child component</button>
    <ng-container #vc></ng-container>
    <ng-template>
      <a-comp #c></a-comp>
    </ng-template>
  `
})
export class AppComponent implements AfterViewInit, AfterViewChecked {
  @ViewChildren('c', {read: ElementRef}) childComps: QueryList<ElementRef>;
  @ViewChild('vc', {read: ViewContainerRef}) viewContainer: ViewContainerRef;
  @ViewChild(TemplateRef) template: TemplateRef<null>;

  ngAfterViewInit() {
    this.viewContainer.createEmbeddedView(this.template);
  }

  ngAfterViewChecked() {
    console.log('number of child components: ' + this.childComps.length);
  }

  remove() {
    this.viewContainer.remove();
  }
}

