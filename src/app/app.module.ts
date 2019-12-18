import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { CalanderComponent } from './calander/calander.component';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { HttpClientComponent } from './http-client/http-client.component';




@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
    ToastrModule.forRoot(),
    CalendarModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    HttpClientComponent,
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
