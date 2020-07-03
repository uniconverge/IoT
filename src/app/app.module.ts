
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
    LoadingSpinnerComponent
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
