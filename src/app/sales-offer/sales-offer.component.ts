import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { LocalStorageService } from '../local-storage.service';
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-sales-offer',
  templateUrl: './sales-offer.component.html',
  styleUrls: ['./sales-offer.component.css']
})
export class SalesOfferComponent implements OnInit {

  projectData: any = [];
  projectUnitData :any = [];
  selectedProjectId:any;
  showProjectConfig = false;
  unitTypes = [];
  unitViews = [];
  unitData = [];
  filteredUnitData = [];
  configType = 'ALL';
  viewType = 'ALL';

  constructor(
    private apiService: ApiService,
    private localStorageService: LocalStorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getProjectData();
  }

  getProjectData(){
    // API call to get project data
    this.apiService.getAllProject().subscribe(
      // tslint:disable-next-line:no-shadowed-variable
      data => {
      console.log('getAllProject', data);
        this.projectData = data.data;
      },
      error => {
        alert(error.error.error_message);
        console.log('error', error);
      }
    );
  }

  getProjectConfig(projectId){
    this.showProjectConfig = false;
    this.selectedProjectId = projectId;
    // API call to get project data
    this.apiService.getUnitData(projectId).subscribe(
      // tslint:disable-next-line:no-shadowed-variable
      data => {
        this.showProjectConfig = true;
      console.log('projectUnitData', data);
        this.projectUnitData = data.data;
        this.unitTypes = this.projectUnitData.unitTypes;
        this.unitViews = this.projectUnitData.unitViews;
        this.unitData = this.filteredUnitData = this.projectUnitData.unitData;
      },
      error => {
        alert(error.error.error_message);
        console.log('error', error);
      }
    );
  }

  generateSalesOffer(unitid){

    // this.router sales-offer-pdf
    const url = this.router.serializeUrl(this.router.createUrlTree(['/sales-offer-pdf']));
    console.log('url',url);
    // Open the route in a new tab
    window.open('/#'+url+'?u='+unitid, '_blank');
  }

  filterConfig(val){
    this.configType = val;
    this.filteredUnitData = this.filterUnits(this.unitData, this.configType, this.viewType);
    console.log('this.filteredUnitData = ',this.filteredUnitData);
  }

  filterView(val){
    this.viewType = val;
    this.filteredUnitData = this.filterUnits(this.unitData, this.configType, this.viewType);
    console.log('this.filteredUnitData',this.filteredUnitData);
  }



  filterUnits(unitData: any[], selectedUnitType: string, selectedUnitView: string): any[] {
    return unitData.filter(unit => {
      const unitTypeMatches = selectedUnitType === 'ALL' || unit.unit_type === selectedUnitType;
      const unitViewMatches = selectedUnitView === 'ALL' || unit.unit_view === selectedUnitView;
      return unitTypeMatches && unitViewMatches;
    });
  }

}
