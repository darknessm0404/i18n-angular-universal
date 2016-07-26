import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
// import { getEn } from './locales/en';
// import { getFr } from './locales/fr';
//
// const aboutContent: Object = {
//   en: getEn(),
//   fr: getFr()
//};

@Injectable()
export class AboutContent implements OnInit {
  public aboutContent: Object;

  constructor(public http: Http, private route: ActivatedRoute) {
    //this.aboutContent = aboutContent;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let lang = +params['lang'];
      this.aboutContent = require('./locales/en.json');
      
      console.log(this.aboutContent);
    });
  }

  getAboutContent() {
    return this.aboutContent;
  }
}
