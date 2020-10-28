
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ChartsModule} from 'ng2-charts'
import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrudComponent } from './crud/crud.component';
import { ChartComponent } from './chart/chart.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AppRoutingModule } from './app-routing.module';
import { CListComponent } from './crud/c-list/c-list.component';
import { CItemsComponent } from './crud/c-list/c-items/c-items.component';
import { CEditComponent } from './crud/c-edit/c-edit.component';
import { CDetailsComponent } from './crud/c-details/c-details.component';
import { CStartComponent } from './crud/c-start/c-start.component';
import { HttpClientModule } from '@angular/common/http';
import { GraphComponent } from './crud/graph/graph.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RegistComponent } from './regist/regist.component';
import { RegListComponent } from './regist/reg-list/reg-list.component';
import { RegItemComponent } from './regist/reg-list/reg-item/reg-item.component';
import { ParamAnalyseComponent } from './param-analyse/param-analyse.component';
import { ParamAnalyseEachComponent } from './param-analyse/param-analyse-each/param-analyse-each.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AlertItemComponent } from './alert-item/alert-item.component';
import { AlertDispComponent } from './alert-disp/alert-disp.component';
import { SimulateComponent } from './simulate/simulate.component';
import { EachDeviceComponent } from './simulate/each-device/each-device.component';
import { AuthComponent } from './auth/auth.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    
    AppComponent,
    CrudComponent,
    ChartComponent,
    SidenavComponent,
    CListComponent,
    CItemsComponent,
    CEditComponent,
    CDetailsComponent,
    CStartComponent,
    GraphComponent,
    LoadingSpinnerComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    RegistComponent,
    RegListComponent,
    RegItemComponent,
    ParamAnalyseComponent,
    ParamAnalyseEachComponent,
    ErrorPageComponent,
    AlertItemComponent,
    AlertDispComponent,
    SimulateComponent,
    EachDeviceComponent,
    AuthComponent,
    SettingsComponent,
  ],
  imports: [
    ChartsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
