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
  inputData = {};

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
      'phone': ['', Validators.required],
      'position': ['', Validators.required],
      'trade_license_number': ['', Validators.required],
      'trade_license_expiry_date': ['', Validators.required],
      'emirates_id_number': ['', Validators.required],
      'passport_number': ['', Validators.required],
      'consultant_name': ['', Validators.required],
      'rera_registration_certificate_number': ['', Validators.required],
      'rera_registration_certificate_expiry_date': ['', Validators.required],
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
      'account_number': ['', Validators.required],
      'iban_number': ['', Validators.required],
      'account_name': ['', Validators.required],      
      'currency': ['', Validators.required]
    });

    this.attachmentForm = this.formbuilder.group({     
      'doc_emirate_id':  ['', ''],
      'doc_visa':  ['', ''],
      'doc_passport':  ['', ''],
      'doc_trade_license':  ['', ''],
      'doc_VAT_certificate':  ['', ''],
      'doc_partner_visa':  ['', ''],
      'doc_company_bank_letter':  ['', ''],
      'doc_MOA':  ['', ''],
      'doc_rera_certificate':  ['', ''],
      'doc_broker_card':  ['', '']
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
  //  // Method to submit form data
  //  onSubmitattachment(event: Event) {
  //   this.attachmentFormSubmitted = true;
  //   console.log('this.attachmentForm', this.attachmentForm);
  //   if(this.attachmentForm.status == 'VALID'){
  //     console.log('this.attachmentForm.value', this.attachmentForm.value);
      
  //     const data = this.attachmentForm.value;
  //     this.apiService.attachmentForm(data).subscribe(
  //       // tslint:disable-next-line:no-shadowed-variable
  //       data => {
  //       console.log('data', data);
  //       if(data.status == 'status'){
  //         alert(data.message);
  //         //this.router.navigate(['/login']);
  //         return;
  //       }else{
  //         alert(data.message);
  //       }
  //       },
  //       error => {
  //         alert(error.error.message);
  //         console.log('error', error);
  //       }
  //     );
  //   }
   
  // }


  onSubmitattachment(f: NgForm) {
    this.attachmentFormSubmitted = true;
    if (this.attachmentForm.valid) {
      // this.showBankList = false;
      let data = {
        doc_emirate_id:   this.inputData['file'],
        doc_visa:   this.inputData['file'],
        doc_passport:   this.inputData['file'],
        doc_trade_license:   this.inputData['file'],
        doc_VAT_certificate:   this.inputData['file'],
        doc_partner_visa:   this.inputData['file'],
        doc_company_bank_letter:   this.inputData['file'],
        doc_MOA:   this.inputData['file'],
        doc_rera_certificate:   this.inputData['file'],
        doc_broker_card:   this.inputData['file']
      };

      // if (this.agentBankList.length >= 3) {
      //   this.errorService.errorMessage('You have maximum number of account.');
      // } else {
        // this.loader.setLoading(true);
        this.apiService.attachmentForm(data).subscribe(
          response => {
            console.log('data', data);
            // if(data.status == 'status'){
            //   alert(data.message);
            //   //this.router.navigate(['/login']);
            //   return;
            // }else{
            //   alert(data.message);
            // }
          },
          error => {
            alert(error.error.message);
            console.log('error', error);
          });
      // }
    } else {
      return false;
    }
    this.attachmentFormSubmitted = false;
  }

  
  onFileChange(event, name, key?: string) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      // if (this.fielExtList.includes(event.target.files[0].type)) {
        const size = event.srcElement.files[0].size;
        if (size > 5242880) {
          alert('Please upload File not exceed more than 5MB');
          return false;
        } else {
          const [file] = event.target.files;
          reader.readAsDataURL(file);
          reader.onload = () => {
            this.inputData[name] = event.target.files[0];
          };
        }
    }
  }
}
