import { Injectable } from '@angular/core';
import { environment } from '../environments/environment'; // Import environment
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = environment.apiBaseUrl;
  apiPrefix = environment.apiUrlPrefix;
  fullApiUrl = this.apiUrl+this.apiPrefix;

  
  constructor(
    private http: HttpClient
  ) {}


  getBankDetails() {
    return this.http.get<any>(this.fullApiUrl + 'broker/get/bank-details')
      // tslint:disable-next-line:no-shadowed-variable
      .pipe(map(data => {
        return data;
      }));
  }


  getAllProject() {
    return this.http.get<any>(this.fullApiUrl + 'project/get/all')
      // tslint:disable-next-line:no-shadowed-variable
      .pipe(map(data => {
        return data;
      }));
  }

  getBrokerPrimaryDetails() {
    return this.http.get<any>(this.fullApiUrl + 'broker/get/primary-details')
      // tslint:disable-next-line:no-shadowed-variable
      .pipe(map(data => {
        return data;
      }));
  }
  getBrokerBankDetails() {
    return this.http.get<any>(this.fullApiUrl + 'broker/get/bank-details')
      // tslint:disable-next-line:no-shadowed-variable
      .pipe(map(data => {
        return data;
      }));
  }
  getBrokerAddressDetails() {
    return this.http.get<any>(this.fullApiUrl + 'broker/get/address-details')
      // tslint:disable-next-line:no-shadowed-variable
      .pipe(map(data => {
        return data;
      }));
  }
  getBrokerAttachmentDetails() {
    return this.http.get<any>(this.fullApiUrl + 'broker/get/attachment-details')
      // tslint:disable-next-line:no-shadowed-variable
      .pipe(map(data => {
        return data;
      }));
  }

    getUnitData(data) {
    return this.http.get<any>(this.fullApiUrl + 'project/get/configuration/'+data)
      // tslint:disable-next-line:no-shadowed-variable
      .pipe(map(data => {
        return data;
      }));
  }

  getSalesOffer(data) {
    return this.http.get<any>(this.fullApiUrl + 'project/get/sales-offer/'+data)
      // tslint:disable-next-line:no-shadowed-variable
      .pipe(map(data => {
        return data;
      }));
  }

  basicinfoForm(data) {
    return this.http.post<any>(this.fullApiUrl + 'broker/add/primary-details', data)
      // tslint:disable-next-line:no-shadowed-variable
      .pipe(map(data => {
        return data;
      }));
  }
  addressForm(data) {
    return this.http.post<any>(this.fullApiUrl + 'broker/add/address', data)
      // tslint:disable-next-line:no-shadowed-variable
      .pipe(map(data => {
        return data;
      }));
  }
  bankForm(data) {
    return this.http.post<any>(this.fullApiUrl + 'broker/add/bank', data)
      // tslint:disable-next-line:no-shadowed-variable
      .pipe(map(data => {
        return data;
      }));
  }
  attachmentForm(data) {
    const formData: FormData = new FormData();
      Object.keys(data).map((key: string) => {
        formData.append(key, data[key]);
      });
      return this.http.post<any>(this.fullApiUrl + 'broker/add/attachment', formData, {
        headers: { 'Accept': 'application/json' },
      }).pipe(map(data => {
        return data;
      })
    );
  }

  contactRMForm(data) {
    return this.http.post<any>(this.fullApiUrl + 'broker/post/contact-rm', data)
      // tslint:disable-next-line:no-shadowed-variable
      .pipe(map(data => {
        return data;
      }));
  }
  scheduleAppointmentForm(data) {
    return this.http.post<any>(this.fullApiUrl + 'broker/post/schedule-appointment', data)
      // tslint:disable-next-line:no-shadowed-variable
      .pipe(map(data => {
        return data;
      }));
  }
  


} 