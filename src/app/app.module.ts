import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AiDAComponent } from './aid-a-component';
import { AiDBComponent } from './aid-b-component';
import { AiDComponent } from './app.component';
import { AiDRemoveElementDirective } from './remove-element.directive';

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
