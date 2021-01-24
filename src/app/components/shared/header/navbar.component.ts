import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  public selectedItem = '';
  constructor() {}
  ngOnInit(): void {}

  public toggleNavbar(): void {
    const topNavbar = document.getElementById('myTopnav');
    if (topNavbar)
    {
        if (topNavbar.className === 'topnav') {
          topNavbar.className += ' responsive';
        } else {
          topNavbar.className = 'topnav';
        }
    }

  }

  public setSelectedNavItem(selectedNavItemText: string): void{
    const navbar = document.getElementById('myTopnav');
    if (navbar) {
      this.selectedItem = selectedNavItemText;
      navbar.className = 'topnav';
    }

  }
}
