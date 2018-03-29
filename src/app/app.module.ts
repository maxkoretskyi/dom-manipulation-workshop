import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BComponent } from './b-component';
import { AComponent } from './a-component';
import { RemoveElementDirective } from './remove-element.directive';

@NgModule({
  declarations: [
    AppComponent,
    AComponent,
    BComponent,
    RemoveElementDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
