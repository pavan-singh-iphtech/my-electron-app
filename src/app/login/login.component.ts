import { Component } from '@angular/core';
import { Router } from '@angular/router';

declare global {
  interface Window {
    gtag?: any;
  }
}

// import { GoogleAnalyticsServiceTsService } from '../google-analytics.service.ts.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userData = { userName: '', password: '' };
  visitor: any;
  constructor(private router: Router) {
  }

  onSubmit() {
    console.log("User submitted login form with data:", this.userData);
    window.gtag('event', 'page_view', {
      'page_title': 'Login Page from Lekha',
      'page_location': '/login',
      'page_path': '/login'
    });
    // Track custom event (e.g., user login)
    window.gtag('event', 'login', {
      'method': 'email/password'
    });
   
    this.router.navigate(['home']);
  
  }
}
