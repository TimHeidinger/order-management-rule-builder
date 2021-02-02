import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownBasicComponent } from './components/rule-configuration/dropdown-basic/dropdown-basic.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarBasicComponent } from './components/navbar-basic/navbar-basic.component';
import { InnerNavbarComponentComponent } from './components/rule-configuration/inner-navbar-component/inner-navbar-component.component';
import { InnerMainContentComponent } from './components/rule-configuration/inner-main-content/inner-main-content.component';
import { IfRowComponentComponent } from './components/rule-configuration/if-row-component/if-row-component.component';
import { ThenRowComponentComponent } from './components/rule-configuration/then-row-component/then-row-component.component';
import { IfConnectionComponentComponent } from './components/rule-configuration/if-connection-component/if-connection-component.component';
import { ThenConnectionComponentComponent } from './components/rule-configuration/then-connection-component/then-connection-component.component';
import { AddButtonComponentComponent } from './components/rule-configuration/add-button-component/add-button-component.component';

@NgModule({
  declarations: [
    AppComponent,
    DropdownBasicComponent,
    NavbarBasicComponent,
    InnerNavbarComponentComponent,
    InnerMainContentComponent,
    IfRowComponentComponent,
    ThenRowComponentComponent,
    IfConnectionComponentComponent,
    ThenConnectionComponentComponent,
    AddButtonComponentComponent
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
