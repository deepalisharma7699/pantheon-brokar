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
      initialCountry: 'auto',
      geoIpLookup: (callback) => {
        fetch('https://ipinfo.io?token=<YOUR_IPINFO_TOKEN>')
          .then(response => response.json())
          .then(data => callback(data.country))
          .catch(() => callback('us'));
      },
      utilsScript: 'assets/js/utils.js', // Path to utils.js (optional)
    });
  }
}
