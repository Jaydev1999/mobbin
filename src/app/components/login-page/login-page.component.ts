import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor() { }

  otherOptionShow: boolean = false;
  seeOtherHide: boolean = true;

  showOtheroption() {
    this.otherOptionShow = true
    this.seeOtherHide = false
  }
  
  ngOnInit(): void {
  }

}
