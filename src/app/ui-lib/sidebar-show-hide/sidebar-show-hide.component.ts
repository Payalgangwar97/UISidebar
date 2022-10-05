import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-show-hide',
  templateUrl: './sidebar-show-hide.component.html',
  styleUrls: ['./sidebar-show-hide.component.css']
})
export class SidebarShowHideComponent implements OnInit {

  @Input()menu = [
    {
      "name": "Dashboard",
      "icon_class": "fa-home",
      "is_active": true,
      "link": "/" ,       
    },
    {
      "name": "Stars Components",      
      "icon_class": "fa-laptop",
      "is_active": false,
      "link": "/"
    },

    {
      "name": " Forms",      
      "icon_class": "fa-list",
      "is_active": false,
      "link": "/"
    },
   
    {
      "name": "Pages",      
      "icon_class": "fa-folder-open",
      "is_active": false,
      "link": "/"
    },
    {
      "name": " Graphs and Statistics",      
      "icon_class": "fa-bar-chart-o",
      "is_active": false,
      "link": "/"
    },
    {
      "name": "Quotes",      
      "icon_class": "fa-font",
      "is_active": false,
      "link": "/"
    },
    {
      "name": "Tables",      
      "icon_class": "fa-table",
      "is_active": false,
      "link": "/"
    },
    {
      "name": "Maps",      
      "icon_class": "fa-map-marker",
      "is_active": false,
      "link": "/"
    },

    {
      "name": "Documentation",      
      "icon_class": "fa-info",
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
