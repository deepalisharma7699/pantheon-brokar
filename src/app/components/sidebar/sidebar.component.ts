import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'design_app', class: '' },
    { path: '/sales-offer', title: 'Create Sales Offer',  icon:'design_app', class: '' },
    // { path: '/available-inventory', title: 'Available Inventory',  icon:'design_app', class: '' },
    // { path: '/generate-invoice', title: 'Generate Invoice',  icon:'design_app', class: '' },
    // { path: '/marketing-collateral', title: 'Marketing Collateral',  icon:'design_app', class: '' },
    // { path: '/offers-discounts', title: 'Offers / Discounts',  icon:'design_app', class: '' },
    // { path: '/my-account', title: 'My Account',  icon:'design_app', class: '' },
    { path: '/broker-kyc', title: 'broker KYC',  icon:'education_atom', class: '' },
    // { path: '/maps', title: 'Maps',  icon:'location_map-big', class: '' },
    // { path: '/notifications', title: 'Notifications',  icon:'ui-1_bell-53', class: '' },

    // { path: '/user-profile', title: 'User Profile',  icon:'users_single-02', class: '' },
    // { path: '/table-list', title: 'Table List',  icon:'design_bullet-list-67', class: '' },
    // { path: '/typography', title: 'Typography',  icon:'text_caps-small', class: '' },
    // { path: '/upgrade', title: 'Upgrade to PRO',  icon:'objects_spaceship', class: 'active active-pro' }
    { path: '/marketing-collateral', title: 'Marketing Collaterals',  icon:'education_atom', class: '' },

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ( window.innerWidth > 991) {
          return false;
      }
      return true;
  };
}
