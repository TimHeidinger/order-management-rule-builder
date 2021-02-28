import { HttpClientModule } from '@angular/common/http';
import { RuleMetaData } from "./models/RuleMetaData";
import { ShipmentRuleData } from './models/ShipmentRuleData';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { InnerOverviewComponent, NgbdSortableHeader } from './components/overview/inner-overview/inner-overview.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PopupDeleteComponent, PopupDeleteContent } from './components/overview/popup-delete/popup-delete.component';
import { PopupCloneComponent, PopupCloneContent } from './components/overview/popup-clone/popup-clone.component';
import { PopupContentS, PopupComponentS, PopupContentS2 } from './components/rule-configuration/popup-save/popup-save.component';

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
    NgbdSortableHeader,
    PopupCloneComponent,
    PopupCloneContent,
    PopupDeleteComponent,
    PopupDeleteContent,
    PopupContentS,
    PopupComponentS,
    PopupContentS2
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    NgbModule,
    NgxMaterialTimepickerModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
  ],

  exports: [InnerOverviewComponent],
  providers: [RuleMetaData, ShipmentRuleData],
  bootstrap: [AppComponent],

})
export class AppModule { }
