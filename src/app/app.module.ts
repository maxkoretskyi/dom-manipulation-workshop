import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AiDComponent } from './app.component';
import { AiDRemoveElementDirective } from './aid-remove-element.directive';
import { AiDBComponent } from './aid-b-component';
import { AiDAComponent } from './aid-a-component';

@NgModule({
  declarations: [
    AiDComponent,
    AiDAComponent,
    AiDBComponent,
    AiDRemoveElementDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AiDComponent]
})
export class AppModule {
}
