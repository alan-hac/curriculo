import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InfoComponent } from './components/info/info.component';
import { AbilitiesComponent } from './components/abilities/abilities.component';
import { ExpirienceComponent } from './components/expirience/expirience.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    AbilitiesComponent,
    ExpirienceComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
