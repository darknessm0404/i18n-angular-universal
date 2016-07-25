import {Injectable, EventEmitter} from '@angular/core';

const languages: Array<string> = ['en', 'fr', 'pt'];

@Injectable()
export class I18nService {
  public languages: Array<string>;
  public selectedLanguage: string;
  public onSelectedLanguage: EventEmitter<string>;

  constructor() {
    this.languages = languages;
    this.selectedLanguage = window.localStorage.getItem('language') || languages[0];
    this.onSelectedLanguage = new EventEmitter<string>();
  }

  static getSelectedLanguage() {
    return window.localStorage.getItem('language') || languages[0];
  }

  selectLanguage(lang) {
    this.selectedLanguage = lang;
    window.localStorage.setItem('language', lang);
    //this.onSelectedLanguage.emit();
  }
}
