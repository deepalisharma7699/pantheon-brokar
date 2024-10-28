import { Injectable, Output } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { LoginService } from '../app/login.service';
import { Subject } from 'rxjs';
// import { BoAlertError } from '../utils/error';
// import { BoErrorType } from '../enums/bo-error-type.enum';
import { ToastrService } from 'ngx-toastr';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  responseErrors = [];
  showErrorsList = [];
  private static COMMON_NETWORK_ERROR = 'Some network error occurred. Please try after sometime';
  private labelList: {} = {
    username: 'Username',
    password: 'Password',
    distributor_id: 'API Associate',
    service: 'Service',
    fromdate: 'From Date',
    todate: 'To Date',
    mobileno: 'Mobile Number',
    otp: 'OTP',
    newpassword: 'New Password',
    confirmpassword: 'Confirm Password',
    txn_from_date: 'from date',
    txn_to_date: 'to date'
  };

  // @Output()
  // flashMessage: Subject<BoAlertError> = new Subject<BoAlertError>();

  constructor(
    private loginService: LoginService,
    private toastr: ToastrService
  ) {
  }

  success(message: any) {
    this.toastr.success(message, '', { positionClass: 'toast-top-center' });
  }

  errorMessage(message: any) {
    this.toastr.error(message, '', { positionClass: 'toast-top-center' });
  }

  error(errorRespose) {
    // alert('hellooo');
    let message: any = typeof (errorRespose) === 'string' ? errorRespose : ErrorService.COMMON_NETWORK_ERROR;
    if (errorRespose instanceof HttpErrorResponse) {
      message = this.parseHttpErrorServiceMessage(errorRespose);

      if (errorRespose.status === 401 && this.loginService.isLogggedIn()) {
        this.loginService.logout();
        return false;
      }

      if (errorRespose.status === 403) {
        this.loginService.logout();
        return false;
      }

      if (errorRespose.status > 500) {
        if (typeof errorRespose.error.data.error_message !== 'undefined' && !!errorRespose.error.data.error_message) {
          message = errorRespose.error.data.error_message;
        } else if (typeof errorRespose.error.error_message !== 'undefined' && !!errorRespose.error.error_message) {
          message = errorRespose.error.error_message;
        } else {
          message = (!!errorRespose.error.error_code && errorRespose.error.error_code != '') ?
            message :
            ErrorService.COMMON_NETWORK_ERROR;
        }
      } else if (errorRespose.status == 500) {
        message = errorRespose.error.error_message;
      }
      if (!!errorRespose.error.error_message && (!errorRespose.error.validation_errors || (errorRespose.error.validation_errors && Object.keys(errorRespose.error.validation_errors).length === 0))) {
        message = errorRespose.error.error_message;
      } else if (errorRespose.error.validation_errors instanceof Array && errorRespose.error.validation_errors.length != 0 ||
        (Object.keys(errorRespose.error.validation_errors).length != 0 && errorRespose.error.validation_errors != null && errorRespose.error.validation_errors != '' &&
          errorRespose.error.validation_errors.length !== 0)) {
        this.responseErrors = [];
        this.responseErrors.push(errorRespose.error.validation_errors);
        for (let i = 0; i < this.responseErrors.length; i++) {
          this.showErrorsList = [];
          for (let key in this.responseErrors[i]) {
            let value = this.responseErrors[i][key];
            // this.showErrorsList.push(value[0]);
            for (let j = 0; j < value.length; j++) {
              this.showErrorsList.push(value[j]);
            }
          }
        }
        message = this.showErrorsList.toString().replace(/,/g, '\n ');
      } else if (Object.keys(errorRespose.error.validation_errors).length) {
        Object.keys(errorRespose.error.validation_errors).forEach(function (value) {
          this.errorService.error(errorRespose.error.validation_errors[value]);
        });
        message = this.showErrorsList.toString().replace(/,/g, '\n ');
      } else if (errorRespose.error.error_message) {
        message = errorRespose.error.error_message;
      }
    }

    if (errorRespose instanceof String) {
      message = errorRespose.toString();
    }

    if (typeof (errorRespose) === 'string') {
      message = errorRespose;
    }
    console.log('message',message);
    // this.flashMessage.next(new BoAlertError(BoErrorType.DANGER, message));
    // this.toastr.error(message);
    this.toastr.error(message, 'Error', { positionClass: 'toast-top-center' });
    return false;
  }


  /**
  * Parse Http Error and return proper message
  * @param errorRespose HttpErrorResponse
  */
  parseHttpErrorServiceMessage(errorRespose: HttpErrorResponse): string {
    if (!errorRespose.error) {
      return !!errorRespose.statusText ? errorRespose.statusText : ErrorService.COMMON_NETWORK_ERROR;
    }

    if (errorRespose.error.error_message) {
      return errorRespose.error.error_message;
    }


    if (errorRespose.error.message) {
      return errorRespose.error.message;
    }

    if (errorRespose.error.responseMessage) {
      return errorRespose.error.responseMessage;
    }

    return ErrorService.COMMON_NETWORK_ERROR;
  }






}