import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GlucoseComponent } from './logged-in/User/glucose/glucose.component';
import { FoodComponent } from './logged-in/User/food/food.component';
import { AboutComponent } from './presentation/about/about.component';
import { HomeComponent } from './presentation/home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GlucoseRecordListStartComponent } from './logged-in/User/glucose/glucose-record-list-start/glucose-record-list-start.component';
import { GlucoseRecordListComponent } from './logged-in/User/glucose/glucose-record-list/glucose-record-list.component';
import { LoginComponent } from './presentation/login/login.component';
import { PresentationComponent } from './presentation/presentation.component';
import { LoggedInComponent } from './logged-in/logged-in.component';
import { PresentationContentComponent } from './presentation/presentation-content/presentation-content.component';
import { RegisterComponent } from './presentation/register/register.component';
import { MyProfileComponent } from './logged-in/my-profile/my-profile.component';
import { MyAppComponent } from './logged-in/Admin/my-app/my-app.component';
import { RedirectToLoginService } from './RouteGuards/redirect-to-login.service';
import { UsersComponent } from './logged-in/Admin/users/users.component';
import { MyPatientsComponent } from './logged-in/Medic/my-patients/my-patients.component';
import { FoodRecordListComponent } from './logged-in/User/food/food-record-list/food-record-list.component';
import { FoodRecordListStartComponent } from './logged-in/User/food/food-record-list-start/food-record-list-start.component';
import { ReportsComponent } from './logged-in/User/reports/reports.component';
import { MailsComponent } from './logged-in/User/mails/mails.component';
import { ReportNotificationsComponent } from './logged-in/report-notifications/report-notifications.component';
import { ResetPasswordComponent } from './presentation/reset-password/reset-password.component';

const routes: Routes = [
  {path: '', redirectTo: '/presentation/content', pathMatch:'full'},
  {path: 'presentation', component: PresentationComponent, children:[
    {path: 'content', component: PresentationContentComponent, canActivate:[RedirectToLoginService]},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'resetpassword', component:ResetPasswordComponent},
    {path: 'about', component: AboutComponent},
    {path: 'home', component: HomeComponent},
  ]},
  {path: 'logged-in', component: LoggedInComponent, children:[
    {path: '', component: ReportNotificationsComponent},
    {path: 'myProfile', component: MyProfileComponent},
    {path: 'myPatients', component: MyPatientsComponent},
    {path: 'users', component: UsersComponent},
    {path: 'myApp', component:MyAppComponent},
    {path: 'food', component: FoodComponent, children:[
      {path:'', component: FoodRecordListStartComponent},
      {path:':date', component: FoodRecordListComponent}
    ]},
    {path: 'glucose', component: GlucoseComponent, children:[
      {path:'',  component:GlucoseRecordListStartComponent},
      {path:':date', component: GlucoseRecordListComponent}
    ]},
    {path: 'reports', component: ReportsComponent},
    {path: 'mails', component: MailsComponent}
  ]},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[RedirectToLoginService]
})
export class AppRoutingModule { }
