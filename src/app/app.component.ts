import { AfterViewChecked, Component, ElementRef, Renderer2, ViewChildren } from '@angular/core';

@Component({
  selector: 'aid-root',
  template: `
    <button (click)="remove()">Remove child component</button>
    <aid-a-comp #c [aidRemoveElement]="removeElement" [parentElement]="hostElement"></aid-a-comp>
  `
})
export class AiDComponent implements AfterViewChecked {
  @ViewChildren('c', {read: ElementRef}) childComps;
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
