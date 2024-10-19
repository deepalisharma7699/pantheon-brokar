import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marketing-collateral',
  templateUrl: './marketing-collateral.component.html',
  styleUrls: ['./marketing-collateral.component.css']
})
export class MarketingCollateralComponent implements OnInit {
  
  project_1_show: boolean = false;
  project_2_show: boolean = false;
  project_3_show: boolean = false;

  showProject(formNumber: number) {
    // Hide all the other forms first
    this.project_1_show = false;
    this.project_2_show = false;
    this.project_3_show = false;

    // Show the selected form based on formNumber
    switch (formNumber) {
      case 1:
        this.project_1_show = true;
        break;
      case 2:
        this.project_2_show = true;
        break;
      case 3:
        this.project_3_show = true;
        break;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
