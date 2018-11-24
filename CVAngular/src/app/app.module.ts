import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatInputModule,
  MatNativeDateModule,
  MatRadioModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatMenuModule,
  MatProgressBarModule,
  MatSlideToggleModule,
  MatSidenavModule,
  MatGridListModule,
  MatCardModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SummaryComponent } from './summary/summary.component';

import { MessageService } from './message.service';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { TimelineComponent } from './timeline/timeline.component';
import { SkillsComponent } from './skills/skills.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    DashboardComponent,
    ContactComponent,
    SummaryComponent,
    TimelineComponent,
    SkillsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, FormsModule,
    MglTimelineModule,
    MatTabsModule, MatButtonModule, MatInputModule, MatDatepickerModule, MatCheckboxModule, MatRadioModule, MatToolbarModule,
    MatNativeDateModule, MatTooltipModule, MatMenuModule, MatProgressBarModule, MatSlideToggleModule, MatGridListModule, MatCardModule,
    AppRoutingModule, HttpClientModule, MatSidenavModule,
     // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    // HttpClientInMemoryWebApiModule.forRoot(
    //  InMemoryDataService, { dataEncapsulation: false }
    // )
  ],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent],
  providers: [MessageService]
})
export class AppModule { }
