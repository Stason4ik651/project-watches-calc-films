import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  menuClass: string = '';

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const url = event.url;
        this.menuClass = this.getMenuClass(url);
      }
    });
  }

  getMenuClass(url: string): string {
    switch (url) {
      case '/':
        return 'menu';
      case '/watches':
        return 'watches-menu';
      case '/calculator':
        return 'calculator-menu';
      case '/movies':
        return 'movies-menu';
      default:
        return '';
    }
  }
}
