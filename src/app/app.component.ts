import { AfterViewChecked, Component, ElementRef, Renderer2, ViewChildren } from '@angular/core';

@Component({
  selector: 'aid-root',
  template: `
    <button (click)="remove()">Remove child component</button>
    <aid-a-comp #c></aid-a-comp>
  `
})
export class AiDComponent implements AfterViewChecked {
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
  }
}

