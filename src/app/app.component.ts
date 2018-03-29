import { AfterViewChecked, Component, ElementRef, Renderer2, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="remove()">Remove child component</button>
    <app-a-comp #c></app-a-comp>
  `
})
export class AppComponent implements AfterViewChecked {
  @ViewChildren('c', {read: ElementRef}) childComps;

  constructor(private hostElement: ElementRef, private renderer: Renderer2) {
  }

  ngAfterViewChecked() {
    console.log('number of child components: ' + this.childComps.length);
  }

  remove() {
    this.renderer.removeChild(
      this.hostElement.nativeElement,
      this.childComps.first.nativeElement
    );

    // trigger change detection in 3 seconds
    setTimeout(() => {
    }, 3000);
  }
}
