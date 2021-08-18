import { Component } from '@angular/core';
import { CURRICULUM as en } from './data/en/curriculum';
import { CURRICULUM as pt } from './data/pt-BR/curriculum';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  curriculum = en

  constructor() { }

  alterLanguage(language: String) {
    this.curriculum = language === 'en' ? en : pt
  }

}
