import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrudComponent } from './crud/crud.component';
import { ChartComponent } from './chart/chart.component';
import { CStartComponent } from './crud/c-start/c-start.component';
import { CEditComponent } from './crud/c-edit/c-edit.component';
import { CDetailsComponent } from './crud/c-details/c-details.component';
import { CrudResolverService } from './crud/crud-resolver.service';
import { GraphComponent } from './crud/graph/graph.component';


const appRoutes: Routes = [
    {path:'',redirectTo:'/crud',pathMatch:'full'},
    {path:'crud',
    component:CrudComponent,
    children:[
      {path:'',component:CStartComponent},
      {path:'add',component:CEditComponent},
      {path:':id',component:CDetailsComponent,resolve:[CrudResolverService]},
      {path:':id/edit',component:CEditComponent,resolve:[CrudResolverService]},
      {path:':id/graph',component:GraphComponent}
    ]
},
 {path:'chart',component:ChartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
