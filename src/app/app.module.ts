import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DropdownBasicComponent } from './components/rule-configuration/dropdown-basic/dropdown-basic.component';
import { NavbarBasicComponent } from './components/global/navbar-basic/navbar-basic.component';
import { InnerNavbarComponentComponent } from './components/rule-configuration/inner-navbar/inner-navbar.component';
import { InnerMainContentComponent } from './components/rule-configuration/inner-main-content/inner-main-content.component';
import { IfRowComponentComponent } from './components/rule-configuration/if-row/if-row.component';
import { ThenRowComponentComponent } from './components/rule-configuration/then-row/then-row.component';
import { IfConnectionComponentComponent } from './components/rule-configuration/if-connection/if-connection.component';
import { ThenConnectionComponentComponent } from './components/rule-configuration/then-connection/then-connection.component';
import { AddButtonComponentComponent } from './components/rule-configuration/add-button/add-button.component';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { InnerOverviewComponent, NgbdSortableHeader } from './components/overview/inner-overview/inner-overview.component';
//import { InnerOverviewRowComponent } from './components/overview/inner-overview-row/inner-overview-row.component';
//import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

//import { NgbdSortableHeader} from './components/overview/inner-overview/inner-overview.component';
import { CommonModule } from '@angular/common';
import { PopupComponent, PopupContent } from './components/overview/popup/popup.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarBasicComponent,
    DropdownBasicComponent,
    InnerNavbarComponentComponent,
    InnerMainContentComponent,
    IfRowComponentComponent,
    ThenRowComponentComponent,
    IfConnectionComponentComponent,
    ThenConnectionComponentComponent,
    AddButtonComponentComponent,
    InnerOverviewComponent,
    //InnerOverviewRowComponent,
    
    NgbdSortableHeader,
    
    PopupComponent,
    PopupContent,
    
    
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    NgbModule,
    NgxMaterialTimepickerModule,
    AppRoutingModule,
    CommonModule
    //ReactiveFormsModule,
    // RouterModule.forRoot([
    //   { path: '', component: InnerOverviewComponent },
    //  { path: 'edit/', component: InnerMainContentComponent },
    // ]),
    
  ],
  exports: [InnerOverviewComponent],
  providers: [],
  bootstrap: [AppComponent,InnerOverviewComponent],
  
})
export class AppModule { }
