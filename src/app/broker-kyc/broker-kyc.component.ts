import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-broker-kyc',
  templateUrl: './broker-kyc.component.html',
  styleUrls: ['./broker-kyc.component.css'],
})
export class BrokerKycComponent implements OnInit {

  activeTab: string = 'basic';
  basicForm: FormGroup;
  basicFormSubmitted = false;
  addressForm: FormGroup;
  addressFormSubmitted = false;
  bankForm: FormGroup;
  bankFormSubmitted = false;
  attachmentForm: FormGroup;
  attachmentFormSubmitted = false;

  constructor(
    private apiService: ApiService,
    private formbuilder: FormBuilder,
    private router: Router
  ) {} 

  selectTab(tab: string) {
    this.activeTab = tab;
  }

  ngOnInit(): void {
    this.basicForm = this.formbuilder.group({     
      'company_name': ['', Validators.required],
      'email': ['', Validators.required],
      'nationality': ['', Validators.required],
      'mobile': ['', Validators.required],
      'position': ['', Validators.required],
      'license_number': ['', Validators.required],
      'license_expiry_date': ['', Validators.required],
      'emiratesId': ['', Validators.required],
      'passport': ['', Validators.required],
      'consultant_name': ['', Validators.required],
      'rera_number': ['', Validators.required],
      'rera_expiry_date': ['', Validators.required],
      'partner_visa': ['', Validators.required],
      'partner_visa_expiry_date': ['', Validators.required]
    });

    this.addressForm = this.formbuilder.group({     
      'country': ['', Validators.required],
      'state': ['', Validators.required],
      'city': ['', Validators.required],
      'postel_code': ['', Validators.required],
      'address': ['', Validators.required]
    });

    this.bankForm = this.formbuilder.group({     
      'bank_name': ['', Validators.required],
      'bank_country': ['', Validators.required],
      'bank_city': ['', Validators.required],
      'accountNo': ['', Validators.required],
      'IBAN_number': ['', Validators.required],
      'currency': ['', Validators.required]
    });

    this.attachmentForm = this.formbuilder.group({     
      'emirateID': ['', Validators.required],
      'visa': ['', Validators.required],
      'passport': ['', Validators.required],
      'trade_license': ['', Validators.required],
      'VAT_certificate': ['', Validators.required],
      'partner_visa': ['', Validators.required],
      'company_bank_letter': ['', Validators.required],
      'MOA': ['', Validators.required],
      'rera_certificate': ['', Validators.required],
      'broker_card': ['', Validators.required]
    });
    
  }
  // Method to submit form data
  onSubmitbasic(event: Event) {
    this.basicFormSubmitted = true;
    console.log('this.basicForm', this.basicForm);
    if(this.basicForm.status == 'VALID'){
      console.log('this.basicForm.value', this.basicForm.value);
      
      const data = this.basicForm.value;
      this.apiService.basicinfoForm(data).subscribe(
        // tslint:disable-next-line:no-shadowed-variable
        data => {
        console.log('data', data);
        if(data.status == 'status'){
          alert(data.message);
          //this.router.navigate(['/login']);
          return;
        }else{
          alert(data.message);
        }
        },
        error => {
          alert(error.error.message);
          console.log('error', error);
        }
      );
    }
   
  }
   // Method to submit form data
   onSubmitaddress(event: Event) {
    this.addressFormSubmitted = true;
    console.log('this.addressForm', this.addressForm);
    if(this.addressForm.status == 'VALID'){
      console.log('this.addressForm.value', this.addressForm.value);
      
      const data = this.addressForm.value;
      this.apiService.addressForm(data).subscribe(
        // tslint:disable-next-line:no-shadowed-variable
        data => {
        console.log('data', data);
        if(data.status == 'status'){
          alert(data.message);
          //this.router.navigate(['/login']);
          return;
        }else{
          alert(data.message);
        }
        },
        error => {
          alert(error.error.message);
          console.log('error', error);
        }
      );
    }
   
  }
   // Method to submit form data
   onSubmitbank(event: Event) {
    this.bankFormSubmitted = true;
    console.log('this.bankForm', this.bankForm);
    if(this.bankForm.status == 'VALID'){
      console.log('this.bankForm.value', this.bankForm.value);
      
      const data = this.bankForm.value;
      this.apiService.bankForm(data).subscribe(
        // tslint:disable-next-line:no-shadowed-variable
        data => {
        console.log('data', data);
        if(data.status == 'status'){
          alert(data.message);
          //this.router.navigate(['/login']);
          return;
        }else{
          alert(data.message);
        }
        },
        error => {
          alert(error.error.message);
          console.log('error', error);
        }
      );
    }
   
  }
   // Method to submit form data
   onSubmitattachment(event: Event) {
    this.attachmentFormSubmitted = true;
    console.log('this.attachmentForm', this.attachmentForm);
    if(this.attachmentForm.status == 'VALID'){
      console.log('this.attachmentForm.value', this.attachmentForm.value);
      
      const data = this.attachmentForm.value;
      this.apiService.attachmentForm(data).subscribe(
        // tslint:disable-next-line:no-shadowed-variable
        data => {
        console.log('data', data);
        if(data.status == 'status'){
          alert(data.message);
          //this.router.navigate(['/login']);
          return;
        }else{
          alert(data.message);
        }
        },
        error => {
          alert(error.error.message);
          console.log('error', error);
        }
      );
    }
   
  }
}
