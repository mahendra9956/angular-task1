import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashbordComponent } from './dashbord/dashbord.component';
import { DashbordChildComponent } from './dashbord-child/dashbord-child.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    DashbordComponent,
    DashbordChildComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class DashboardModule { }
