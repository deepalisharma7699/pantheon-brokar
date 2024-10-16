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

  constructor(
    private apiService: LoginService,
    private formbuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.registrationForm = this.formbuilder.group({
      'broker_type': ['', Validators.required],
      'company_name': ['', Validators.required],
      'orn_number': ['', Validators.required],
      'company_license_number': ['', Validators.required],
      'company_license_expiry': ['', Validators.required],
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
        if(data.status == 'status'){
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
}
