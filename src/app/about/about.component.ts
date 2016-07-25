import { Component } from '@angular/core';
import { AboutContent } from './about.content';
import { I18nService } from '../../app/i18n.service';

@Component({
  moduleId: __filename,
  selector: 'about',
  styleUrls: ['about.style.css'],
  templateUrl: 'about.template.html'
})
export class About {
  public text: Object;

  constructor(aboutContent: AboutContent, i18nService: I18nService) {
    //let selectedLanguage = i18nService.getSelectedLanguage();
    this.text = aboutContent.getAboutContent();
  }
}
