import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'aid-b-comp',
  template: `
    <div>I am B component</div>
  `
})
export class AiDBComponent implements DoCheck {
  ngDoCheck() {
    console.log('ngDoCheck is called on BComponent');
  }
}
