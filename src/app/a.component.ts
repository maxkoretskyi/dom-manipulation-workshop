import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'a-comp',
  template: `
    <div>I am A component</div>
    <b-comp></b-comp>
  `
})
export class AComponent implements DoCheck {
  ngDoCheck() {
    console.log('ngDoCheck is called on AComponent');
  }
}
