import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'aid-a-comp',
  template: `
    <div>I am A component</div>
    <aid-b-comp></aid-b-comp>
  `
})
export class AiDAComponent implements DoCheck {
  ngDoCheck() {
    console.log('ngDoCheck is called on AComponent');
  }
}
