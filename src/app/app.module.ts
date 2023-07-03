import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './logged-in/header/header.component';
import { GlucoseComponent } from './logged-in/User/glucose/glucose.component';
import { FoodComponent } from './logged-in/User/food/food.component';
import { HomeComponent } from './presentation/home/home.component';
import { AboutComponent } from './presentation/about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GlucoseAnalysisComponent } from './logged-in/User/glucose/glucose-analysis/glucose-analysis.component';
import { GlucoseRecordListComponent } from './logged-in/User/glucose/glucose-record-list/glucose-record-list.component';
import { GlucoseRecordComponent } from './logged-in/User/glucose/glucose-record-list/glucose-record/glucose-record.component';
import { GlucoseDaysComponent } from './logged-in/User/glucose/glucose-days/glucose-days.component';
import { GlucoseRecordListStartComponent } from './logged-in/User/glucose/glucose-record-list-start/glucose-record-list-start.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClickStopPropagationDirective } from './shared/click-stop-propagation.directive';
import { DatePipe } from '@angular/common';
import { LoginComponent } from './presentation/login/login.component';

import { NgChartsModule } from 'ng2-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule} from '@angular/material/autocomplete'
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule} from "@angular/material/list"
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { PresentationComponent } from './presentation/presentation.component';
import { PresentationFrontComponent } from './presentation/presentation-front/presentation-front.component';
import { PresentationChoicesComponent } from './presentation/presentation-choices/presentation-choices.component';
import { PresentationHeaderComponent } from './presentation/presentation-header/presentation-header.component';
import { PresentationFooterComponent } from './presentation/presentation-footer/presentation-footer.component';
import { LoggedInComponent } from './logged-in/logged-in.component';
import { PresentationContentComponent } from './presentation/presentation-content/presentation-content.component';
import { RegisterComponent } from './presentation/register/register.component';
import { CustomHttpInterceptor } from './Interceptors/custom-http.interceptor';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MyProfileComponent } from './logged-in/my-profile/my-profile.component';
import { MyAppComponent } from './logged-in/Admin/my-app/my-app.component';
import { UsersComponent } from './logged-in/Admin/users/users.component';
import { MyPatientsComponent } from './logged-in/Medic/my-patients/my-patients.component';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { UsersDeleteDialogComponent } from './logged-in/Admin/users/users-delete-dialog/users-delete-dialog.component';
import { UsersUpdateDialogComponent } from './logged-in/Admin/users/users-update-dialog/users-update-dialog.component';
import { PatientComponent } from './logged-in/Medic/my-patients/patient/patient.component';
import { GlucoseRecordUpdateDialogComponent } from './logged-in/User/glucose/glucose-record-list/glucose-record/glucose-record-update-dialog/glucose-record-update-dialog.component';
import { GlucoseRecordDeleteDialogComponent } from './logged-in/User/glucose/glucose-record-list/glucose-record/glucose-record-delete-dialog/glucose-record-delete-dialog.component';
import { GlucoseRecordCreateDialogComponent } from './logged-in/User/glucose/glucose-record-list/glucose-record/glucose-record-create-dialog/glucose-record-create-dialog.component';
import { FoodDaysComponent } from './logged-in/User/food/food-days/food-days.component';
import { FoodRecordListComponent } from './logged-in/User/food/food-record-list/food-record-list.component';
import { FoodRecordComponent } from './logged-in/User/food/food-record-list/food-record/food-record.component';
import { FoodRecordListStartComponent } from './logged-in/User/food/food-record-list-start/food-record-list-start.component';
import { FoodRecordCreateDialogComponent } from './logged-in/User/food/food-record-list/food-record/food-record-create-dialog/food-record-create-dialog.component';
import { FoodRecordUpdateDialogComponent } from './logged-in/User/food/food-record-list/food-record/food-record-update-dialog/food-record-update-dialog.component';
import { FoodRecordDeleteDialogComponent } from './logged-in/User/food/food-record-list/food-record/food-record-delete-dialog/food-record-delete-dialog.component';
import { MatStepperModule } from '@angular/material/stepper'
import { MatGridListModule} from '@angular/material/grid-list';
import { ReportsComponent } from './logged-in/User/reports/reports.component';
import { MailsComponent } from './logged-in/User/mails/mails.component';
import { MailListComponent } from './logged-in/User/mails/mail-list/mail-list.component';
import { MailComponent } from './logged-in/User/mails/mail-list/mail/mail.component';
import { MailCreateDialogComponent } from './logged-in/User/mails/mail-list/mail/mail-create-dialog/mail-create-dialog.component';
import { MailDeleteDialogComponent } from './logged-in/User/mails/mail-list/mail/mail-delete-dialog/mail-delete-dialog.component';
import { MailUpdateDialogComponent } from './logged-in/User/mails/mail-list/mail/mail-update-dialog/mail-update-dialog.component';
import { ReportNotificationsComponent } from './logged-in/report-notifications/report-notifications.component';
import { ResetPasswordComponent } from './presentation/reset-password/reset-password.component';
import { ForgotPasswordDialogComponent } from './presentation/login/forgot-password-dialog/forgot-password-dialog.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GlucoseComponent,
    FoodComponent,
    HomeComponent,
    AboutComponent,
    PageNotFoundComponent,
    GlucoseAnalysisComponent,
    GlucoseRecordListComponent,
    GlucoseRecordComponent,
    GlucoseDaysComponent,
    GlucoseRecordListStartComponent,
    ClickStopPropagationDirective,
    LoginComponent,
    PresentationComponent,
    PresentationFrontComponent,
    PresentationChoicesComponent,
    PresentationHeaderComponent,
    PresentationFooterComponent,
    LoggedInComponent,
    PresentationContentComponent,
    RegisterComponent,
    MyProfileComponent,
    MyAppComponent,
    UsersComponent,
    MyPatientsComponent,
    UsersDeleteDialogComponent,
    UsersUpdateDialogComponent,
    PatientComponent,
    GlucoseRecordUpdateDialogComponent,
    GlucoseRecordDeleteDialogComponent,
    GlucoseRecordCreateDialogComponent,
    FoodDaysComponent,
    FoodRecordListComponent,
    FoodRecordComponent,
    FoodRecordListStartComponent,
    FoodRecordCreateDialogComponent,
    FoodRecordUpdateDialogComponent,
    FoodRecordDeleteDialogComponent,
    ReportsComponent,
    MailsComponent,
    MailListComponent,
    MailComponent,
    MailCreateDialogComponent,
    MailDeleteDialogComponent,
    MailUpdateDialogComponent,
    ReportNotificationsComponent,
    ResetPasswordComponent,
    ForgotPasswordDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatOptionModule,
    MatSidenavModule,
    MatListModule,
    MatTabsModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatProgressBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgChartsModule,
    MatAutocompleteModule,
    MatStepperModule,
    MatGridListModule
  ],
  providers: [
    DatePipe,
    {provide: HTTP_INTERCEPTORS,
      useClass: CustomHttpInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
