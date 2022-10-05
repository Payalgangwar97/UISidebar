import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sidebar-nav',
  templateUrl: './sidebar-nav.component.html',
  styleUrls: ['./sidebar-nav.component.css']
})
export class SidebarNavComponent implements OnInit {
  @Input()menu = [
    {
      "name": "Shop",
      "icon_class": "fa-shopping-bag",
      "is_active": true,
      "link": "/" ,       
    },
    {
      "name": "Controls",      
      "icon_class": "fa-sliders",
      "is_active": false,
      "link": "/"
    },

    {
      "name": "Folio",      
      "icon_class": "fa-briefcase",
      "is_active": false,
      "link": "/"
    },
   
    {
      "name": "Graphicals",      
      "icon_class": "fa-pie-chart",
      "is_active": false,
      "link": "/"
    },
    {
      "name": "Papers",      
      "icon_class": "fa-paper-plane-o",
      "is_active": false,
      "link": "/"
    },
    {
      "name": "Ass Finder",      
      "icon_class": "fa-bars",
      "is_active": false,
      "link": "/"
    },
  ]
  submenu: any;



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
