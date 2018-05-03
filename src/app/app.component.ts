import {AfterViewInit, Component, TemplateRef, ViewChild, ViewContainerRef, ViewRef} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="show('1')">Show Template 1</button>
    <button (click)="show('2')">Show Template 2</button>
    <div>
      <ng-container #vc></ng-container>
    </div>
    <ng-template #t1><span>I am SPAN from template 1</span></ng-template>
    <ng-template #t2><span>I am SPAN from template 2</span></ng-template>
  `
})
export class AppComponent implements AfterViewInit {
  @ViewChild('vc', {read: ViewContainerRef}) vc: ViewContainerRef;
  @ViewChild('t1', {read: TemplateRef}) t1: TemplateRef<null>;
  @ViewChild('t2', {read: TemplateRef}) t2: TemplateRef<null>;
  view1: ViewRef;
  view2: ViewRef;

  ngAfterViewInit() {
    this.view1 = this.t1.createEmbeddedView(null);
    this.view2 = this.t2.createEmbeddedView(null);
  }

  show(type) {
    const view = type === '1' ? this.view1 : this.view2;
    this.vc.detach();
    this.vc.insert(view);
  }
}

