import { Component } from '@angular/core';
import { CURRICULUM } from './data/en/curriculum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent { 
  lang = "en";
  curriculum = CURRICULUM;
}
