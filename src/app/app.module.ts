import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuOverviewExampleComponent } from './components/menu-overview-example/menu-overview-example.component';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownBasicComponent } from './components/rule-configuration/dropdown-basic/dropdown-basic.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarBasicComponent } from './components/navbar-basic/navbar-basic.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuOverviewExampleComponent,
    DropdownBasicComponent,
    NavbarBasicComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
