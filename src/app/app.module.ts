import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BComponent } from './b-component';
import { AComponent } from './a-component';
import { AppDrawDynamicComponentDirective } from './draw-dynamic-component.directive';

@NgModule({
  declarations: [
    AppComponent,
    AComponent,
    BComponent,
    AppDrawDynamicComponentDirective
  ],
  entryComponents: [
    AComponent,
    BComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
