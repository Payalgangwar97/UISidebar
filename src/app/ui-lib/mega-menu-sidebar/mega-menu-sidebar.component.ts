import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mega-menu-sidebar',
  templateUrl: './mega-menu-sidebar.component.html',
  styleUrls: ['./mega-menu-sidebar.component.css']
})
export class MegaMenuSidebarComponent implements OnInit {
  submenu: any;

  @Input()menu = [
    {
      "name": "Dashboard",
      "icon_class": "fa-home",
      "is_active": true,
      "link": "/" ,       
    },
    {
      "name": "About Us",      
      "icon_class": "fa-edit",
      "is_active": false,
      "link": "/"
    },

    {
      "name": "Features",      
      "icon_class": "fa-gift",
      "is_active": false,
      "link": "/"
    },
   
    {
      "name": "News",      
      "icon_class": "fa-globe",
      "is_active": false,
      "link": "/"
    },
    {
      "name": " Blog",      
      "icon_class": "fa-comments-o",
      "is_active": false,
      "link": "/"
    },
    {
      "name": "Portfolio",      
      "icon_class": "fa-picture-o",
      "is_active": false,
      "link": "/"
    },
    {
      "name": "Contacts",      
      "icon_class": "fa-envelope-o",
      "is_active": false,
      "link": "/"
    },

    
  ]

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  go_to_link(selected:any) {
    this.menu.forEach((element:any) => {
        if (element.name == selected.name) {
          element.is_active = true;
        } else {
          element.is_active = false;
        }
    });
    this.route.navigate([selected.link]);

  }

}
