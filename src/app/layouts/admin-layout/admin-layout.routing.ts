import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { BrokerKycComponent } from '../../broker-kyc/broker-kyc.component';
import { SalesOfferComponent } from '../../sales-offer/sales-offer.component';
import { AvailableInventoryComponent } from '../../available-inventory/available-inventory.component';
import { GenerateInvoiceComponent } from '../../generate-invoice/generate-invoice.component';
import { MarketingCollateralComponent } from '../../marketing-collateral/marketing-collateral.component';
import { OffersDiscountsComponent } from '../../offers-discounts/offers-discounts.component';
import { MyAccountComponent } from '../../my-account/my-account.component';
//import { RegisterComponent } from '../../register/register.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'broker-kyc',     component: BrokerKycComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'sales-offer',    component: SalesOfferComponent },
    { path: 'available-inventory',    component: AvailableInventoryComponent },
    { path: 'generate-invoice',    component: GenerateInvoiceComponent },
    { path: 'marketing-collateral',    component: MarketingCollateralComponent },
    { path: 'offers-discounts',    component: OffersDiscountsComponent },
    { path: 'my-account',    component: MyAccountComponent }
];
