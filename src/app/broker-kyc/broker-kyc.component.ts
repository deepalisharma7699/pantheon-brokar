import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import {Router} from "@angular/router";
import { ErrorService } from '../error.service';

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

  brokerPrimaryData:any;
  brokerBankData:any;
  brokerAddressData:any;
  brokerAttachmentData:any;


  constructor(
    private apiService: ApiService,
    private formbuilder: FormBuilder,
    private router: Router,
    private errorService: ErrorService
  ) {
    this.getBrokerPrimaryDetails();
    this.getBrokerAddressDetails();
    this.getBrokerAttachmentDetails();
    this.getBrokerBankDetails();
  } 

  getBrokerPrimaryDetails(){
    this.apiService.getBrokerPrimaryDetails().subscribe(
      // tslint:disable-next-line:no-shadowed-variable
      data => {
      if(data.status == 200){
        this.brokerPrimaryData = data.data;
        console.log('brokerPrimaryData', this.brokerPrimaryData);
        // patch primary value
        this.basicForm.patchValue({
          company_name: this.brokerPrimaryData.company_name,
          trade_license_number : this.brokerPrimaryData.trade_license_number,
          trade_license_expiry_date : new Date(this.brokerPrimaryData.trade_license_expiry_date).toISOString().split('T')[0],
          rera_registration_certificate_number : this.brokerPrimaryData.rera_registration_certificate_number,
          rera_registration_certificate_expiry_date : new Date(this.brokerPrimaryData.rera_registration_certificate_expiry_date).toISOString().split('T')[0],
          consultant_name : this.brokerPrimaryData.consultant_name,
          authorized_person_name : this.brokerPrimaryData.authorized_person_name,
          position : this.brokerPrimaryData.position,
          nationality : this.brokerPrimaryData.nationality,
          emirates_id_number : this.brokerPrimaryData.emirates_id_number,
          passport_number : this.brokerPrimaryData.passport_number,
          phone : this.brokerPrimaryData.phone,
          mobile_no : this.brokerPrimaryData.mobile_no,
          email : this.brokerPrimaryData.email,
          partner_visa : this.brokerPrimaryData.partner_visa,
          partner_visa_expiry_date : new Date(this.brokerPrimaryData.partner_visa_expiry_date).toISOString().split('T')[0],
          partner_passport_no : this.brokerPrimaryData.partner_passport_no,
        });
      }
      },
      error => {
        this.errorService.error(error);
        console.log('error', error);
      }
    );
  }

  getBrokerAttachmentDetails(){
    this.apiService.getBrokerAttachmentDetails().subscribe(
      // tslint:disable-next-line:no-shadowed-variable
      data => {
      if(data.status == 200){
        this.brokerAttachmentData = data.data;
        console.log('brokerAttachmentData', this.brokerAttachmentData);

        this.attachmentForm.patchValue({
          doc_emirate_id : this.brokerAttachmentData.doc_emirate_id,
          doc_visa : this.brokerAttachmentData.doc_visa,
          doc_passport : this.brokerAttachmentData.doc_passport,
          doc_trade_license : this.brokerAttachmentData.doc_trade_license,
          doc_VAT_certificate : this.brokerAttachmentData.doc_VAT_certificate,
          doc_partner_visa : this.brokerAttachmentData.doc_partner_visa,
          doc_company_bank_letter : this.brokerAttachmentData.doc_company_bank_letter,
          doc_MOA : this.brokerAttachmentData.doc_MOA,
          doc_rera_certificate : this.brokerAttachmentData.doc_rera_certificate,
          doc_broker_card : this.brokerAttachmentData.doc_broker_card
        });
        
      }
      },
      error => {
        // this.errorService.error(error);
        console.log('error', error);
      }
    );
  }
  getBrokerAddressDetails(){
    this.apiService.getBrokerAddressDetails().subscribe(
      // tslint:disable-next-line:no-shadowed-variable
      data => {
      if(data.status == 200){
        this.brokerAddressData = data.data;
        console.log('brokerAddressData', this.brokerAddressData);
        this.addressForm.patchValue({
          country: this.brokerAddressData.country,
          state: this.brokerAddressData.state,
          city: this.brokerAddressData.city,
          postel_code: this.brokerAddressData.postel_code,
          address: this.brokerAddressData.address
        });
      }
      },
      error => {
        // this.errorService.error(error);
        console.log('error', error);
      }
    );
  }
  getBrokerBankDetails(){
    this.apiService.getBrokerBankDetails().subscribe(
      // tslint:disable-next-line:no-shadowed-variable
      data => {
      if(data.status == 200){
        this.brokerBankData = data.data;
        console.log('brokerBankData', this.brokerBankData);
        this.bankForm.patchValue({
          bank_name: this.brokerBankData.bank_name,
          bank_country: this.brokerBankData.bank_country,
          bank_city: this.brokerBankData.bank_city,
          account_number: this.brokerBankData.account_number,
          iban_number: this.brokerBankData.iban_number,
          account_name: this.brokerBankData.account_name,      
          currency: this.brokerBankData.currency
        });
      }
      },
      error => {
        // this.errorService.error(error);
        console.log('error', error);
      }
    );
  }

  selectTab(tab: string) {
    this.activeTab = tab;
  }

  ngOnInit(): void {
    this.basicForm = this.formbuilder.group({     
      'company_name': ['', [Validators.required]],
      'trade_license_number': ['', Validators.required],
      'trade_license_expiry_date': ['', Validators.required],
      'rera_registration_certificate_number': ['', Validators.required],
      'rera_registration_certificate_expiry_date': ['', Validators.required],
      'consultant_name': ['', Validators.required],
      'authorized_person_name': ['', Validators.required],
      'position': ['', Validators.required],
      'nationality': ['', Validators.required],
      'emirates_id_number': ['', Validators.required],
      'passport_number': ['', Validators.required],
      'phone': ['', Validators.required],
      'mobile_no': ['', Validators.required],
      'email': ['', Validators.required],
      'partner_visa': ['', Validators.required],
      'partner_visa_expiry_date': ['', Validators.required],
      'partner_passport_no': ['', Validators.required],
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
      'doc_emirate_id':  ['', Validators.required],
      'doc_visa':  ['', Validators.required],
      'doc_passport':  ['', Validators.required],
      'doc_trade_license':  ['', Validators.required],
      'doc_VAT_certificate':  ['', Validators.required],
      'doc_partner_visa':  ['', Validators.required],
      'doc_company_bank_letter':  ['', Validators.required],
      'doc_MOA':  ['', Validators.required],
      'doc_rera_certificate':  ['', Validators.required],
      'doc_broker_card':  ['', Validators.required]
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
        if(data.status == 200){
          this.selectTab('address');
          this.errorService.success(data.data.message);
          //this.router.navigate(['/login']);
        }else{
          this.errorService.errorMessage(data.message);
        }
        },
        error => {
          this.errorService.error(error);
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
        if(data.status == 200){
          this.selectTab('bank');
          this.errorService.success(data.data.message);
          //this.router.navigate(['/login']);
          return;
        }else{
          this.errorService.errorMessage(data.message);
        }
        },
        error => {
          this.errorService.error(error);
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
        if(data.status == 200){
          this.selectTab('attachments');
          this.errorService.success(data.data.message);
          return;
        }else{
          this.errorService.errorMessage(data.message);
        }
        },
        error => {
          this.errorService.error(error);
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
  //         this.errorService.error(data.message);
  //         //this.router.navigate(['/login']);
  //         return;
  //       }else{
  //         this.errorService.error(data.message);
  //       }
  //       },
  //       error => {
  //         this.errorService.error(error);
  //         console.log('error', error);
  //       }
  //     );
  //   }
   
  // }


  onSubmitattachment(f: NgForm) {
    this.attachmentFormSubmitted = true;
    if (this.attachmentForm.valid) {      
      // if (this.inputData['doc_emirate_id'] == undefined) {
      //   this.errorService.errorMessage("Please upload emirate_id.");
      //   return false;
      // }
      // if (this.inputData['doc_visa'] == undefined) {
      //   this.errorService.errorMessage("Please upload visa.");
      //   return false;
      // }
      // if (this.inputData['doc_passport'] == undefined) {
      //   this.errorService.errorMessage("Please upload Passport.");
      //   return false;
      // }
      // if (this.inputData['doc_trade_license'] == undefined) {
      //   this.errorService.errorMessage("Please upload trade_license.");
      //   return false;
      // }
      // if (this.inputData['doc_VAT_certificate'] == undefined) {
      //   this.errorService.errorMessage("Please upload VAT_certificate.");
      //   return false;
      // }
      // if (this.inputData['doc_partner_visa'] == undefined) {
      //   this.errorService.errorMessage("Please upload partner_visa.");
      //   return false;
      // }
      // if (this.inputData['doc_company_bank_letter'] == undefined) {
      //   this.errorService.errorMessage("Please upload company_bank_letter.");
      //   return false;
      // }
      // if (this.inputData['doc_MOA'] == undefined) {
      //   this.errorService.errorMessage("Please upload MOA.");
      //   return false;
      // }
      // if (this.inputData['doc_rera_certificate'] == undefined) {
      //   this.errorService.errorMessage("Please upload rera_certificate.");
      //   return false;
      // }
      // if (this.inputData['doc_broker_card'] == undefined) {
      //   this.errorService.errorMessage("Please upload broker_card.");
      //   return false;
      // }
      // this.showBankList = false;
      let data = {
        doc_emirate_id:   this.inputData['doc_emirate_id'] ?? null,
        doc_visa:   this.inputData['doc_visa'] ?? null,
        doc_passport:   this.inputData['doc_passport'] ?? null,
        doc_trade_license:   this.inputData['doc_trade_license'] ?? null,
        doc_VAT_certificate:   this.inputData['doc_VAT_certificate'] ?? null,
        doc_partner_visa:   this.inputData['doc_partner_visa'] ?? null,
        doc_company_bank_letter:   this.inputData['doc_company_bank_letter'] ?? null,
        doc_MOA:   this.inputData['doc_MOA'] ?? null,
        doc_rera_certificate:   this.inputData['doc_rera_certificate'] ?? null,
        doc_broker_card:   this.inputData['doc_broker_card'] ?? null
      };
      // if (this.agentBankList.length >= 3) {
      //   this.errorService.errorMessage('You have maximum number of account.');
      // } else {
        // this.loader.setLoading(true);
        this.apiService.attachmentForm(data).subscribe(
          data => {
            console.log('data', data);
            if(data.status == 200){
              this.errorService.success(data.data.message);
              //this.router.navigate(['/login']);
              return;
            }else{
              this.errorService.errorMessage(data.message);
            }
          },
          error => {
            this.errorService.error(error);
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
          this.errorService.errorMessage('Please upload File not exceed more than 2MB');
          return false;
        } else {
          const [file] = event.target.files;
          reader.readAsDataURL(file);
          reader.onload = () => {
            this.inputData[name] = event.target.files[0];
            console.log('inputData', this.inputData);
          };
        }
    }
  }
}
