import {Injectable} from '@angular/core';
import { I18nService } from '../../app/i18n.service';

var lang = I18nService.getSelectedLanguage();
var getLocalizedContent;

if(lang === 'en') {
  getLocalizedContent = require('./locales/en');
}
else {
  getLocalizedContent = require('./locales/fr');
}

@Injectable()
export class AboutContent {
  public aboutContent: Object;

  constructor() {
    this.aboutContent = getLocalizedContent();
  }

  getAboutContent() {
    return this.aboutContent;
  }
}
