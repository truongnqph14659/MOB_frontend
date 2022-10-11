import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { MessageComponent } from './components/admin/message/message.component';
import { UserComponent } from './components/admin/user/user.component';
import { StatisticalComponent } from './components/admin/statistical/statistical.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductComponent } from './components/admin/product/product.component';
import { LayoutComponent } from './Page/layout/layout.component';
import { NotPageComponent } from './Page/not-page/not-page.component';
import { ContactComponent } from './components/admin/message/contact/contact.component';
import { ChatContainerComponent } from './components/admin/message/chat-container/chat-container.component';
import { LoginComponent } from './Page/login/login.component';
import { RegisterComponent } from './Page/register/register.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MessageComponent,
    UserComponent,
    StatisticalComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    LayoutComponent,
    NotPageComponent,
    ContactComponent,
    ChatContainerComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
