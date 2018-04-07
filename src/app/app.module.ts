import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AiDComponent } from './app.component';
import { AiDAddAttributeDirective } from './aid-add-attribute.directive';

@NgModule({
  declarations: [
    AiDComponent,
    AiDAddAttributeDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AiDComponent]
})
export class AppModule {
}
