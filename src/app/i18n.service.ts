import {Injectable} from '@angular/core';

const languages: Array<string> = ['en', 'fr', 'pt'];

@Injectable()
export class I18nService {
  public languages: Array<string>;
  public selectedLanguage: string;

  constructor() {
    this.languages = languages;
    this.selectedLanguage = window.localStorage.getItem('language') || languages[0];
  }

  getSelectedLanguage() {
    return this.selectedLanguage;
  }

  selectLanguage(lang) {
    this.selectedLanguage = lang
    window.localStorage.setItem('language', lang);
  }
}
