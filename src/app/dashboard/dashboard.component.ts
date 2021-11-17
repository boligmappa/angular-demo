import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.elementRef.nativeElement
      .querySelector('boligmappa-search')
      .addEventListener('property-confirmed', this.exampleFunction.bind(this));
  }

  exampleFunction(e: CustomEvent) {
    const boligmappaNumber = e.detail.boligmappaNumber;

    //...
  }
  config = {
    clientId: 'alpha-client',
    idObject: '{"userId": "martin"}',
    saveTokenEndpoint: {
      endpointUrl: 'https://localhost:5001/tokenHandler/Save',
      method: 'POST',
    },
    retrieveTokenEndpoint: {
      endpointUrl: 'https://localhost:5001/tokenHandler/Retrieve',
      method: 'POST',
    },
  };
}
