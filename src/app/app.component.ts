import {
  AfterViewChecked, AfterViewInit, Component, ElementRef, Renderer2, TemplateRef, ViewChild, ViewChildren,
  ViewContainerRef
} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="remove()">Remove child component</button>
    <ng-container #vc></ng-container>
    <ng-template>
      <app-a-comp #c></app-a-comp>
    </ng-template>
  `
})
export class AppComponent implements AfterViewChecked, AfterViewInit {
  @ViewChildren('c', {read: ElementRef}) childComps;
  @ViewChild(TemplateRef) template;
  @ViewChild('vc', {read: ViewContainerRef}) vc;

  constructor() {
  }

  ngAfterViewInit() {
    this.vc.createEmbeddedView(this.template);
  }

  ngAfterViewChecked() {
    console.log('number of child components: ' + this.childComps.length);
  }

  remove() {
    this.vc.remove();

    // trigger change detection in 3 seconds
    setTimeout(() => {
    }, 3000);
  }
}
