import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AComponent } from './a-component';

@NgModule({
  declarations: [
    AppComponent,
    AComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
