import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GlucoseComponent } from './glucose/glucose.component';
import { FoodComponent } from './food/food.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GlucoseAnalysisComponent } from './glucose/glucose-analysis/glucose-analysis.component';
import { GlucoseRecordListComponent } from './glucose/glucose-record-list/glucose-record-list.component';
import { GlucoseRecordComponent } from './glucose/glucose-record-list/glucose-record/glucose-record.component';
import { GlucoseDaysComponent } from './glucose/glucose-days/glucose-days.component';
import { GlucoseRecordListStartComponent } from './glucose/glucose-record-list-start/glucose-record-list-start.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClickStopPropagationDirective } from './shared/click-stop-propagation.directive';
import { DatePipe } from '@angular/common';
import { LoginComponent } from './login/login.component';

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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    LoginComponent
  ],
  imports: [
    BrowserModule,
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
    BrowserAnimationsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
