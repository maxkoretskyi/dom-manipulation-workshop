import { AfterViewChecked, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="remove()">Remove child component</button>
    <a-comp #c></a-comp>
  `
})
export class AppComponent implements AfterViewChecked {
  @ViewChildren('c', {read: ElementRef}) childComps: QueryList<ElementRef>;

  ngAfterViewChecked() {
    console.log('number of child components: ' + this.childComps.length);
  }

  remove() {
  }
}

