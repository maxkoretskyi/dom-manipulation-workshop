import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AiDComponent } from './app.component';
import { AiDBComponent } from './aid-b-component';
import { AiDAComponent } from './aid-a-component';

@NgModule({
  declarations: [
    AiDComponent,
    AiDAComponent,
    AiDBComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AiDComponent]
})
export class AppModule {
}
