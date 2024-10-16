import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import * as CryptoJS from 'crypto-js';

declare var require: any;

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  public static LOGIN_DATA = 'user.logindata';
  public static LOGIN_TOKEN = 'login.token';
  public static ACCESS_TOKEN = 'user.token';
  public static USER_TYPE = 'user.user_type';
  public static APP_TYPE = 'app_type';
  key: any;
  

  constructor() {
  }

  /**
   * set local storage item
   * @param key string
   * @param value string
   */
  setItem(key: string, value: string) {
    self.localStorage.setItem(key, value);
  }

  getAgent() {
    return '';
  }

  /**
   * get local storage item
   * @param key string
   */
  getItem(key: string): string | null {
    return self.localStorage.getItem(key);
  }

  /**
   * Clear local storage
   */
  clear() {
    self.localStorage.clear();
  }

  /**
   * Set json item in local storage
   * @param key string
   * @param value any
   */
  setJsonItem(key: string, value: {}) {
    self.localStorage.setItem(key, JSON.stringify(value));
  }

  /**
 * Set encrypted item in local storage
 * @param key string
 * @param value any
 */
  setEncryptedItem(key: string, value: {}) {
    const sha1 = require('sha1');
    this.key = sha1(environment.encryptionKey).slice(0, 16);
    const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(value), this.key).toString();
    self.localStorage.setItem(key, encryptedData);
  }

  /**
   * get json item from specified local storage key
   * @param key string
   */
  getJsonItem(key: string) {
    return JSON.parse(self.localStorage.getItem(key));
  }

  /**
 * get decrypted item from specified local storage key
 * @param key string
 */
  getDecryptedItem(storageKey: string) {
    const sha1 = require('sha1');
    this.key = sha1(environment.encryptionKey).slice(0, 16);
    const storageData = self.localStorage.getItem(storageKey);
    // decrypt data
    const decryptedData = CryptoJS.AES.decrypt(storageData, this.key).toString(CryptoJS.enc.Utf8);
    return JSON.parse(decryptedData);
  }

  getBranchId() {
    const loginData = this.getDecryptedItem(LocalStorageService.LOGIN_DATA);
    return loginData.user_data.branch_id;
  }

  getAgentPartyCode() {
    const loginData = this.getDecryptedItem(LocalStorageService.LOGIN_DATA);
    return loginData.user_data.party_code;
  }

  getSubUsersAgentPartyCode() {
    const loginData = this.getDecryptedItem(LocalStorageService.LOGIN_DATA);
    return loginData.user_data.agent_party_code;
  }

  getResourceType() {
    let resourceType = self.localStorage.getItem(LocalStorageService.USER_TYPE);
    return resourceType.replace(/^"|"$/g, '');
  }

  getAccessToken() {
    const loginData = this.getDecryptedItem(LocalStorageService.LOGIN_DATA);
    return loginData.token_data.access_token;
  }

  getIsDrpServicesMapped(){
    const loginData = this.getDecryptedItem(LocalStorageService.LOGIN_DATA);
    return loginData.user_data?.drp_services_mapped ?? 'No';
  }

  getEncryptedAccessToken() {
    let agentPartyCode = this.getAgentPartyCode();
    const Auth = this.getTokenType() + ' ' + this.getAccessToken();
    //  encrypt Auth Token
    const sha1 = require('sha1');
    this.key = sha1(agentPartyCode).slice(0, 16);
    const encryptedToken = CryptoJS.AES.encrypt(Auth, this.key).toString();
    return encryptedToken;
  }

  getTokenType() {
    const loginData = this.getDecryptedItem(LocalStorageService.LOGIN_DATA);
    return loginData.token_data.token_type;
  }

  getDistributorBusinessName() {
    const loginData = this.getDecryptedItem(LocalStorageService.LOGIN_DATA);
    return loginData.user_data.business_name;
  }

  getDistributorPersonalName() {
    const loginData = this.getDecryptedItem(LocalStorageService.LOGIN_DATA);
    return loginData.user_data.name;
  }

  getDistributorBranchCode() {
    const loginData = this.getDecryptedItem(LocalStorageService.LOGIN_DATA);
    return loginData.user_data.branch_code;
  }

  getDistributorBranchName() {
    const loginData = this.getDecryptedItem(LocalStorageService.LOGIN_DATA);
    return loginData.user_data.branch_name;
  }

  getDistributorBranchId() {
    const loginData = this.getDecryptedItem(LocalStorageService.LOGIN_DATA);
    return loginData.user_data.branch_id;
  }

  getDistributorDBSerNo() {
    const loginData = this.getDecryptedItem(LocalStorageService.LOGIN_DATA);
    return loginData.user_data.db_serno;
  }

  getAgentUserId() {
    const loginData = this.getDecryptedItem(LocalStorageService.LOGIN_DATA);
    return loginData.user_data.user_id;
  }

  getAgentUserData() {
    const loginData = this.getDecryptedItem(LocalStorageService.LOGIN_DATA);
    return loginData.user_data;
  }

  getDistributorAddress() {
    const loginData = this.getDecryptedItem(LocalStorageService.LOGIN_DATA);
    return ((loginData.user_data.personal_address_line_1) ? loginData.user_data.personal_address_line_1 : '') + ' ' + ((loginData.user_data.personal_address_line_2) ? loginData.user_data.personal_address_line_2 : '');
  }

  getDistributorPinCode() {
    const loginData = this.getDecryptedItem(LocalStorageService.LOGIN_DATA);
    return loginData.user_data.business_pincode;
  }

  getDistributorBusinessArea() {
    const loginData = this.getDecryptedItem(LocalStorageService.LOGIN_DATA);
    return loginData.user_data.business_area;
  }


  getDistributorBusinessCity() {
    const loginData = this.getDecryptedItem(LocalStorageService.LOGIN_DATA);
    return loginData.user_data.business_city;
  }

  getDistributorBusinessState() {
    const loginData = this.getDecryptedItem(LocalStorageService.LOGIN_DATA);
    return loginData.user_data.business_state;
  }

  getDistributorPanNo() {
    const loginData = this.getDecryptedItem(LocalStorageService.LOGIN_DATA);
    return loginData.user_data.pan;
  }

  getAgentMobileNo() {
    const loginData = this.getDecryptedItem(LocalStorageService.LOGIN_DATA);
    return loginData.user_data.mobile_no;
  }

  getUserData() {
    const loginData = this.getDecryptedItem(LocalStorageService.LOGIN_DATA);
    return loginData.user_data;
  }
}
