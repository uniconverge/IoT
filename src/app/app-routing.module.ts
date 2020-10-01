import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrudComponent } from './crud/crud.component';
import { ChartComponent } from './chart/chart.component';
import { CStartComponent } from './crud/c-start/c-start.component';
import { CEditComponent } from './crud/c-edit/c-edit.component';
import { CDetailsComponent } from './crud/c-details/c-details.component';
import { CrudResolverService } from './crud/crud-resolver.service';
import { GraphComponent } from './crud/graph/graph.component';
import { HomeComponent } from './home/home.component';
import { RegistComponent } from './regist/regist.component';
import { RegListComponent } from './regist/reg-list/reg-list.component';
import {RegistResolverService}from './regist/regist-resolver.service'
import { ParamAnalyseComponent } from './param-analyse/param-analyse.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AlertDispComponent } from './alert-disp/alert-disp.component';
import { SimulateComponent } from './simulate/simulate.component';
import { AuthComponent } from './auth/auth.component';

const appRoutes: Routes = [
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'crud',
    component:CrudComponent,
      children:[
        {path:'',redirectTo:'0/graph',pathMatch:'full'},
        {path:':id/graph',component:GraphComponent}
      ]
    },
  {path:'registry',
  component:RegistComponent,
    children:[
        {path:'',component:RegListComponent},
        {path:'add',component:CEditComponent},
        {path:':id',component:CDetailsComponent,resolve:[RegistResolverService]},
        {path:':id/edit',component:CEditComponent,resolve:[RegistResolverService]},
    ]},
 {path:'chart',component:ChartComponent},
 {path:'analyse-each',component:ParamAnalyseComponent},
 {path:'alert',component:AlertDispComponent},
 {path:'sensors',component:SimulateComponent},
 {path:'auth',component:AuthComponent},
 {path:'error-page',component:ErrorPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
