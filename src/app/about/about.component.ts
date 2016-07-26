import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  moduleId: __filename,
  selector: 'about',
  styleUrls: ['about.style.css'],
  templateUrl: 'about.template.html'
})
export class About {
  public content: Object;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      let lang:string = params['lang'];

      if(lang == 'en') {
        this.content = require('./locales/en.json');
      }
      else if(lang == 'fr') {
        this.content = require('./locales/fr.json');
      }

      console.log(this.content);
    });
  }
}
