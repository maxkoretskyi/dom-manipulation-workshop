import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-a-comp',
  template: `
    <div>I am A component</div>
    <app-b-comp></app-b-comp>
  `
})
export class AComponent implements DoCheck {
  ngDoCheck() {
    console.log('ngDoCheck is called on AComponent');
  }
}
