import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {CalendarComponent, CalendarModule} from '@syncfusion/ej2-angular-calendars';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {AppModule} from '../app.module';
import {CalanderComponent} from '../calander/calander.component';
import {AdminLayoutModule} from '../layouts/admin-layout/admin-layout.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    // AdminLayoutModule,
    // CalendarModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent
  ]
})
export class ComponentsModule { }
