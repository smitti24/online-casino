import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  public selectedItem = ''
  constructor() {}
  ngOnInit() {}

  public toggleNavbar(): void {
    var x = document.getElementById('myTopnav');
    if (x)
    {
        if (x.className === 'topnav') {
          x.className += ' responsive';
        } else {
          x.className = 'topnav';
        }
    }

  }

  public setSelectedNavItem(selectedNavItemText: string){
    const navbar = document.getElementById('myTopnav');
    if (navbar) {
      this.selectedItem = selectedNavItemText;
      navbar.className = 'topnav';
    }

  }
}
