import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicantdetailsComponent } from './applicantdetails/applicantdetails.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExpiredComponent } from './expired/expired.component';
import { HomeComponent } from './home/home.component';
import { LeadsComponent } from './leads/leads.component';
import { NewleadsComponent } from './newleads/newleads.component';
import { PolicyComponent } from './policy/policy.component';
import { PolicycoveredComponent } from './policycovered/policycovered.component';
import { RenewalComponent } from './renewal/renewal.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TotalApplicationsComponent } from './total-applications/total-applications.component';
import { ProtectFormOneComponent } from './protect-form-one/protect-form-one.component';
import { MultiStepComponent } from './multi-step/multi-step.component';
import { ProductCatalogueComponent } from './product-catalogue/product-catalogue.component';
import { CgProtectExpandComponent } from './cg-protect-expand/cg-protect-expand.component';
import { CalculatePremiumComponent } from './calculate-premium/calculate-premium.component';
import { CgDetailsFormComponent } from './cg-details-form/cg-details-form.component';
import { CgformServiceTsService } from './cgform.service.ts.service';
import { FormsComponent } from './forms/forms.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  { path: 'totalapplications', component: TotalApplicationsComponent },
  // {path: 'allapplications',redirectTo:'/totalapplications',pathMatch:'full'},
  {path:'form_one',component:ProtectFormOneComponent},
  {path:'',component:HomeComponent},
  {path:'form',component:FormsComponent},
  { path: 'sidenav', component: SidenavComponent},
  {path:'renewal',component:RenewalComponent},
  {path:'expired',component:ExpiredComponent},
  {path:'newleads',component:NewleadsComponent},
  {path:'applicantdetails',component:ApplicantdetailsComponent},
  {path:'policycovered',component:PolicycoveredComponent},
  {path:'leads',component:LeadsComponent},
  {path:'steps',component:MultiStepComponent  },
  {path:'product',component:ProductCatalogueComponent},
  {path:'cg-expand',component:CgProtectExpandComponent},
  {path:'calculate-premium',component:CalculatePremiumComponent},
  {path:'cg-form',component:CgDetailsFormComponent},
  {path:'CgformService',component:CgformServiceTsService}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
