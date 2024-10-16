import { Directive, ElementRef, OnInit } from '@angular/core';
import intlTelInput from 'intl-tel-input';

@Directive({
  selector: '[appPhoneNumber]'
})
export class PhoneNumberDirective implements OnInit {

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    const input = this.el.nativeElement;
    intlTelInput(input, {
      initialCountry: 'auto',  // Automatically set the country based on geo-location
      geoIpLookup: (callback) => {
        fetch('https://ipinfo.io/json?token=<YOUR_IPINFO_TOKEN>')
          .then(response => response.json())
          .then(data => {
            const countryCode = data.country ? data.country.toLowerCase() : 'ae'; // Fallback to India if location fails
            callback(countryCode);
          })
          .catch(() => callback('ae'));  // Default to India on error
      },
      utilsScript: 'assets/js/utils.js', // Path to utils.js (optional)
    });
  }
}
