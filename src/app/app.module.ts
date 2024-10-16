import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { SalesOfferComponent } from './sales-offer/sales-offer.component';
import { AvailableInventoryComponent } from './available-inventory/available-inventory.component';
import { GenerateInvoiceComponent } from './generate-invoice/generate-invoice.component';
import { MarketingCollateralComponent } from './marketing-collateral/marketing-collateral.component';
import { OffersDiscountsComponent } from './offers-discounts/offers-discounts.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AppHttpInterceptor } from './app-http.interceptor';
import { BrokerKycComponent } from './broker-kyc/broker-kyc.component';
import { SalesOfferPdfComponent } from './sales-offer-pdf/sales-offer-pdf.component';
import { PhoneNumberDirective } from './directives/phone-number.directive';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
    ToastrModule.forRoot()
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    SalesOfferComponent,
    AvailableInventoryComponent,
    GenerateInvoiceComponent,
    MarketingCollateralComponent,
    OffersDiscountsComponent,
    MyAccountComponent,
    RegisterComponent,
    LoginComponent,
    BrokerKycComponent,
    SalesOfferPdfComponent,
    PhoneNumberDirective
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AppHttpInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
