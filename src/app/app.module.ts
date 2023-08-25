import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AllSalesComponent } from './all-sales/all-sales.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewApplicantsComponent } from './new-applicants/new-applicants.component';
import { TcpComponent } from './tcp/tcp.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventComponent } from './event/event.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TotalApplicationsComponent } from './total-applications/total-applications.component';
import { HomeComponent } from './home/home.component';
import { InsightsComponent } from './insights/insights.component';
import { RenewalComponent } from './renewal/renewal.component';
import { ExpiredComponent } from './expired/expired.component';
import { NewleadsComponent } from './newleads/newleads.component';
import { ApplicantdetailsComponent } from './applicantdetails/applicantdetails.component';
import { PolicycoveredComponent } from './policycovered/policycovered.component';
import { PolicyComponent } from './policy/policy.component';
import { LeadsComponent } from './leads/leads.component';
import { LeadStatusComponent } from './lead-status/lead-status.component';
import { ProtectFormOneComponent } from './protect-form-one/protect-form-one.component';
import {MatStepperModule} from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MultiStepComponent } from './multi-step/multi-step.component';
import { ProductCatalogueComponent } from './product-catalogue/product-catalogue.component';
import { CgProtectExpandComponent } from './cg-protect-expand/cg-protect-expand.component';
import { CalculatePremiumComponent } from './calculate-premium/calculate-premium.component'
import { MatProgressBarModule} from '@angular/material/progress-bar';
import { MatSliderModule } from '@angular/material/slider';
import { CgDetailsFormComponent } from './cg-details-form/cg-details-form.component';
import { FormsComponent } from './forms/forms.component'; 
@NgModule({
  declarations: [
    AppComponent,
    NewApplicantsComponent,
    AllSalesComponent,
    TcpComponent,
    DashboardComponent,
    EventComponent,
    ScheduleComponent,
    SidenavComponent,
    TotalApplicationsComponent,
    HomeComponent,
    InsightsComponent,
    RenewalComponent,
    ExpiredComponent,
    NewleadsComponent,
    ApplicantdetailsComponent,
    PolicycoveredComponent,
    PolicyComponent,
    LeadsComponent,
    LeadStatusComponent,
    ProtectFormOneComponent,
    MultiStepComponent,
    ProductCatalogueComponent,
    CgProtectExpandComponent,
    CalculatePremiumComponent,
    CgDetailsFormComponent,
    FormsComponent,

  ],
  imports: [
    MatSliderModule,
    BrowserModule,
    NgbModule,
    FormsModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
