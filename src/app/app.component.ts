import { AfterViewChecked, Component, ElementRef, TemplateRef, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="show()">Show child component</button>
    <button (click)="remove()">Remove child component</button>
    <ng-template [appNgIfDirective]="showChildComponent">
      <app-a-comp #c></app-a-comp>
    </ng-template>
  `
})
export class AppComponent implements AfterViewChecked {
  @ViewChildren('c', {read: ElementRef}) childComps;
  @ViewChild(TemplateRef) template;
  @ViewChild('vc', {read: ViewContainerRef}) vc;
  showChildComponent = true;

  ngAfterViewChecked() {
    console.log('number of child components: ' + this.childComps.length);
  }

  show() {
    this.showChildComponent = true;
  }

  remove() {
    this.showChildComponent = false;
  }
}
