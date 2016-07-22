import {Injectable} from '@angular/core';
import { getEn } from './locales/en';
import { getFr } from './locales/fr';

const aboutContent: Object = {
  en: getEn(),
  fr: getFr()
}

@Injectable()
export class AboutContent {
  public aboutContent: Object;

  constructor() {
    this.aboutContent = aboutContent;
  }

  getAboutContent(lang) {
    return this.aboutContent[lang];
  }
}
