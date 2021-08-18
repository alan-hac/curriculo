import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.sass']
})
export class LanguageComponent {

  @Output() alterLanguage = new EventEmitter<String>()

  constructor() { }

  setLanguage(language: String) {
    this.alterLanguage.emit(language);
  }

}
