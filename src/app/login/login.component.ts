import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginFormSubmitted = false;
  returnUrl : String;

  constructor(
    private apiService: LoginService,
    private formbuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.loginForm = this.formbuilder.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit(event: Event){
    this.loginFormSubmitted = true;
    console.log('this.loginForm', this.loginForm);
    if(this.loginForm.status == 'VALID'){
      console.log('this.loginForm.value', this.loginForm.value);
      
      const data = this.loginForm.value;
      this.apiService.login(data).subscribe(
        // tslint:disable-next-line:no-shadowed-variable
        loginData => {
        console.log('loginData', loginData);
         // set data in local storage
         this.setLoginData(loginData) 
         .then((data) => {
          console.log('here', loginData);
               this.router.navigate(['/dashboard']);
         })
         .catch((error) => {
           console.error('Error:', error);
         });
        },
        error => {
          alert(error.error.message);
          console.log('error', error);
        }
      );
    }
  }

  setLoginData(loginData): Promise<any> {
    return new Promise((resolve, reject) => {
      this.apiService.setLoginData(loginData.data);
      resolve('success');
    });
  }

}
