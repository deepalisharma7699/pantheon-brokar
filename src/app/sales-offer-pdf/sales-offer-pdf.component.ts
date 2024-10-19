import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { ApiService } from '../api.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-sales-offer-pdf',
  templateUrl: './sales-offer-pdf.component.html',
  styleUrls: ['./sales-offer-pdf.component.css']
})
export class SalesOfferPdfComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute
  ) { 
  }
  salesData = [];
  unitData:any; 
  downpayment:any;
  dldcharges:any;
  oqoodcharges:any;
  adminfee:any;
  empower:any;
  paymentPlans =[]; 
  unit_id :any;
  ngOnInit(): void {
    this.route.queryParams
    .subscribe(params => {
      if (params.u) {
        this.unit_id = params.u;
      }
    });

    // get project payment plan
    this.getPaymentPlan();
  }


  getPaymentPlan(){
    // API call to get project data
    this.apiService.getSalesOffer(this.unit_id).subscribe(
      // tslint:disable-next-line:no-shadowed-variable
      data => {
        this.unitData = data.data.unitData;
        this.paymentPlans = data.data.paymentPlan;
        this.downpayment = data.data.paymentPlan[0];
        this.dldcharges = data.data.paymentPlan[1];
        this.oqoodcharges = data.data.paymentPlan[2];
        this.adminfee = data.data.paymentPlan[3];
        this.empower = data.data.paymentPlan[4];
        console.log("unitData",this.unitData);
      },
      error => {
        alert(error.error.error_message);
        console.log('error', error);
      }
    );
  }
  
  @ViewChild('contentToConvert', { static: false }) contentToConvert!: ElementRef;

  async downloadPDF() {
    const pdf = new jsPDF('p', 'mm', 'a4'); // Initialize PDF (A4 size)
    const content = this.contentToConvert.nativeElement;

    const options = { scale: 2, scrollY: 0 }; // Higher scale for better quality

    const pages = content.querySelectorAll('.page'); // Select all pages
    let positionY = 0;

    for (let i = 0; i < pages.length; i++) {
      const canvas = await html2canvas(pages[i], options);
      const imgData = canvas.toDataURL('image/jpeg', 0.8);
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      if (i > 0) pdf.addPage(); // Add new page for every subsequent section
      pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight);

      positionY += imgHeight; // Adjust position for next page
    }

    pdf.save('pantheon-offer.pdf');
  }

  sharePdf(){
    alert('coming soon');
  }
  
  
  // downloadPDF() {
  //   const data = document.getElementById('pdf-content');
  //   if (data) {
  //     html2canvas(data).then(canvas => {
  //       const imgWidth = 208;
  //       const imgHeight = canvas.height * imgWidth / canvas.width;
  //       const contentDataURL = canvas.toDataURL('image/png');
  //       const pdf = new jsPDF('p', 'mm', 'a4');
  //       const position = 0;
  //       pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
  //       pdf.save('MYPdf.pdf');
  //     });
  //   }
  // }

}
