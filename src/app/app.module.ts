import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { HomeadminComponent } from './components/admin/homeadmin/homeadmin.component';
import { AnalyticsComponent } from './components/admin/analytics/analytics.component';
import { HeaderpageComponent } from './components/admin/headerpage/headerpage.component';
import { FooterpageComponent } from './components/admin/footerpage/footerpage.component';
import { SiderbarComponent } from './components/admin/siderbar/siderbar.component';
import { AdminComponent } from './components/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    HomeadminComponent,
    AnalyticsComponent,
    HeaderpageComponent,
    FooterpageComponent,
    SiderbarComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
