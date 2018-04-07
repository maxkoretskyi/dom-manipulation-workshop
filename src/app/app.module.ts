import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AiDComponent } from './app.component';
import { AiDAComponent } from './aid-a-component';
import { AiDBComponent } from './aid-b-component';

@NgModule({
  declarations: [
    AiDComponent,
    AiDAComponent,
    AiDBComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AiDComponent]
})
export class AppModule {
}
