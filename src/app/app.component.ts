import { AfterViewChecked, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'aid-root',
  template: `
    <button (click)="remove()">Remove child component</button>
    <aid-a-comp #c></aid-a-comp>
  `
})
export class AiDComponent implements AfterViewChecked {
  @ViewChildren('c', {read: ElementRef}) childComps: QueryList<ElementRef>;

  ngAfterViewChecked() {
    console.log('number of child components: ' + this.childComps.length);
  }

  remove() {
  }
}

