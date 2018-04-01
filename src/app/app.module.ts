import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AiDComponent } from './app.component';
import { AiDBComponent } from './aid-b-component';
import { AiDAComponent } from './aid-a-component';
import { AiDNgIfDirective } from './aid-ng-if.directive';

@NgModule({
  declarations: [
    AiDComponent,
    AiDAComponent,
    AiDBComponent,
    AiDNgIfDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AiDComponent]
})
export class AppModule {
}
