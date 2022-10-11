import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { MessageComponent } from './components/admin/message/message.component';
import { ProductComponent } from './components/admin/product/product.component';
import { StatisticalComponent } from './components/admin/statistical/statistical.component';
import { LayoutComponent } from './Page/layout/layout.component';
import { LoginComponent } from './Page/login/login.component';
import { NotPageComponent } from './Page/not-page/not-page.component';
import { RegisterComponent } from './Page/register/register.component';

const routes: Routes = [
  {
    path:'',component:LayoutComponent,children:[
      { path: '', redirectTo: 'Dashboard', pathMatch: 'full' },
      {path:'Dashboard',component:DashboardComponent},
      {path:'Products',component:ProductComponent},
      {path:'Message',component:MessageComponent},
      {path:'Statistical',component:StatisticalComponent},
    ]
  },
  { path: 'Login', component:LoginComponent },
  { path: 'Rgister', component:RegisterComponent },
  { path: '**', component:NotPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
