import { Injectable } from '@angular/core';
const ua = require('universal-analytics');



@Injectable({
  providedIn: 'root'
})
export class GoogleAnalyticsServiceTsService {
  visitor: any;
  constructor() { 
    this.visitor = ua('G-71RWQX1NQT');
  }
  trackPageView(page: string) {
    this.visitor.pageview(page).send();
  }

  trackEvent(category: string, action: string) {
    this.visitor.event(category, action).send();
  }
}
