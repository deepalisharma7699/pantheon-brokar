import { Injectable } from '@angular/core';
import { environment } from '../environments/environment'; // Import environment
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { LocalStorageService } from './local-storage.service';
import {Router, ActivatedRoute} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiUrl = environment.apiBaseUrl;
  apiPrefix = environment.apiUrlPrefix;
  fullApiUrl = this.apiUrl+this.apiPrefix;

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService,
    private router: Router
  ) { }

  registerBroker(data) {
    const headers = { 'skip': 'true'};
    return this.http.post<any>(this.fullApiUrl + 'register', data, { headers })
      // tslint:disable-next-line:no-shadowed-variable
      .pipe(map(data => {
        return data;
      }));
  }

  login(data) {
    const headers = { 'skip': 'true'};
    return this.http.post<any>(this.fullApiUrl + 'login', data, { headers })
      // tslint:disable-next-line:no-shadowed-variable
      .pipe(map(data => {
        return data;
      }));
  }

  setLoginData(loginData: any) {
    this.localStorageService.setEncryptedItem(LocalStorageService.LOGIN_DATA, loginData);
  }

  isLogggedIn() {
    return !!this.localStorageService.getItem(LocalStorageService.LOGIN_DATA) ? true : false;
  }

  logout() {
    // dismiss all modals
    this.localStorageService.clear();
    this.router.navigate(['/login']);
    // this.toastr.error('Unauthenticated', '', { positionClass: 'toast-top-center' });
  }



}
