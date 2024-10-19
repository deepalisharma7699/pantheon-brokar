import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationForm: FormGroup;
  registrationFormSubmitted = false;
  currentDate: string;
  selectedDate: string;
  constructor(
    private apiService: LoginService,
    private formbuilder: FormBuilder,
    private router: Router
  ) {}

  rag_form_0_show = true;
  rag_form_1_show = false;
  rag_form_2_show = false;
  rag_form_3_show = false;
  rag_form_4_show = false;


  ngOnInit() {
    const today = new Date();
    this.currentDate = today.toISOString().split('T')[0]; // Format to 'YYYY-MM-DD'
    this.registrationForm = this.formbuilder.group({
      // 'broker_type': ['', Validators. ],
      // 'company_name': ['', Validators.required],
      'orn_number': ['', Validators.required],
      'company_license_number': ['', Validators.required],
      'agencyname': ['', Validators.required],
      'email': ['', Validators.required],
      'mobile_number': ['', Validators.required],
      'name': ['', Validators.required],
      'consultantName': ['', Validators.required]
    });
  }
  // Method to submit form data
  onSubmit(event: Event) {
    this.registrationFormSubmitted = true;
    console.log('this.registrationForm', this.registrationForm);
    if(this.registrationForm.status == 'VALID'){
      console.log('this.registrationForm.value', this.registrationForm.value);
      
      const data = this.registrationForm.value;
      this.apiService.registerBroker(data).subscribe(
        // tslint:disable-next-line:no-shadowed-variable
        data => {
        console.log('data', data);
        if(data.status == 'success'){
          alert(data.message);
          this.router.navigate(['/login']);
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

  showDiv(divid: number) {
    // Reset all rag_form_* values to false
    for (let i = 0; i <= 4; i++) {
        this[`rag_form_${i}_show`] = false;
    }

    // Set the dynamically selected div to true
    this[`rag_form_${divid}_show`] = true;
  }

}
