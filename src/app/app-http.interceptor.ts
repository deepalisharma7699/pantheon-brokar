import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import * as CryptoJS  from 'crypto-js';
import { LocalStorageService } from './local-storage.service';

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {

  constructor(
    private localStorageService: LocalStorageService
  ) {}

  intercept(
    req: HttpRequest<unknown>, 
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const skipIntercept = req.headers.has('skip');
        if (skipIntercept) {
            req = req.clone({
                headers: req.headers.delete('skip')
            });
        } else {
            // get Access token from storage
            const localStorageObj = new LocalStorageService();

            let agentPartyCode = localStorageObj.getAgentPartyCode();
            const Auth = localStorageObj.getTokenType() + ' ' + localStorageObj.getAccessToken();
            console.log('Auth', Auth);
            //  encrypt Auth Token
            // const sha1 = require('sha1');
            // this.key = sha1(agentPartyCode).slice(0, 16);
            // const encryptedToken = CryptoJS.AES.encrypt(Auth, this.key).toString();
            req = req.clone({
                headers: req.headers.set('Authorization', Auth)
            });
            // req = req.clone({
            //     headers: req.headers.set('x-clientId', agentPartyCode)
            // });
        }


    return next.handle(req);
  }
}
