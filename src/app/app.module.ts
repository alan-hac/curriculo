import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { InfoComponent } from './component/info/info.component';
import { AbilityComponent } from './component/ability/ability.component';
import { ExperienceComponent } from './component/experience/experience.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    AbilityComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
