import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-b-comp',
  template: `
    <div>I am B component</div>
  `
})
export class BComponent implements DoCheck {
  ngDoCheck() {
    console.log('ngDoCheck is called on BComponent');
  }
}
