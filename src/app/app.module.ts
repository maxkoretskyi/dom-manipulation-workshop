import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AiDComponent } from './app.component';
import { AiDBComponent } from './aid-b-component';
import { AiDAComponent } from './aid-a-component';
import { AiDRenderDynamicComponentDirective } from './aid-render-dynamic-component.directive';

@NgModule({
  declarations: [
    AiDComponent,
    AiDAComponent,
    AiDBComponent,
    AiDRenderDynamicComponentDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AiDComponent]
})
export class AppModule {
}
