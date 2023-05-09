import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
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
import { GlucoseModalComponent } from './glucose/glucose-modal/glucose-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClickStopPropagationDirective } from './shared/click-stop-propagation.directive';
import { DatePipe } from '@angular/common';

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

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
