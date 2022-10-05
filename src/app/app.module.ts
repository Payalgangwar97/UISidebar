import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MegaMenuSidebarComponent } from './ui-lib/mega-menu-sidebar/mega-menu-sidebar.component';
import { SidebarShowHideComponent } from './ui-lib/sidebar-show-hide/sidebar-show-hide.component';
import { SidebarNavComponent } from './ui-lib/sidebar-nav/sidebar-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    MegaMenuSidebarComponent,
    SidebarShowHideComponent,
    SidebarNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
