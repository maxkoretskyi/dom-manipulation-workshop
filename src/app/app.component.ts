import { AfterViewChecked, Component, ElementRef, Renderer2, ViewChildren } from '@angular/core';
import { AComponent } from './a-component';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="remove()">Remove child component</button>
    <app-a-comp [appRemoveElement]="removeElement" [parentElement]="hostElement"></app-a-comp>
  `
})
export class AppComponent implements AfterViewChecked {
  @ViewChildren(AComponent) childComps;
  removeElement = false;

  constructor(public hostElement: ElementRef) {
  }

  ngAfterViewChecked() {
    console.log(this.childComps.length);
  }

  remove() {
    this.removeElement = true;
  }
}
