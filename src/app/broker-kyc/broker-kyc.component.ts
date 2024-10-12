import { Component } from '@angular/core';

@Component({
  selector: 'app-broker-kyc',
  templateUrl: './broker-kyc.component.html',
  styleUrls: ['./broker-kyc.component.css'],
})
export class BrokerKycComponent  {
  activeTab: string = 'basic';

  selectTab(tab: string) {
    this.activeTab = tab;
  }
}
