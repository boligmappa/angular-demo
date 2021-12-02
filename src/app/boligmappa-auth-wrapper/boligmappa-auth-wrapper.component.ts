import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boligmappa-auth-wrapper',
  templateUrl: './boligmappa-auth-wrapper.component.html',
  styleUrls: ['./boligmappa-auth-wrapper.component.css'],
})
export class BoligmappaAuthWrapperComponent implements OnInit {
  constructor() {}

  config = {
    clientId: 'alpha-client',
    idObject: '{"userId": "1234"}',
    authCodeEndpoint: {
      endpointUrl: 'https://localhost:5001/tokenProvider/Exchange',
    },
  };

  ngOnInit(): void {}
}
