import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GlucoseComponent } from './glucose/glucose.component';
import { FoodComponent } from './food/food.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GlucoseRecordListStartComponent } from './glucose/glucose-record-list-start/glucose-record-list-start.component';
import { GlucoseRecordListComponent } from './glucose/glucose-record-list/glucose-record-list.component';
import { GlucoseModalComponent } from './glucose/glucose-modal/glucose-modal.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch:'full'},
  {path: 'glucose', component: GlucoseComponent, children:[
    {path:'',  component:GlucoseRecordListStartComponent},
    {path:':date', component: GlucoseRecordListComponent},
    {path:':date/:id', component:GlucoseRecordListComponent, children:[
      {path:'edit', component: GlucoseModalComponent}]}
  ]},
  {path: 'login', component: LoginComponent},
  {path: 'food', component: FoodComponent},
  {path: 'about', component: AboutComponent},
  {path: 'home', component: HomeComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
