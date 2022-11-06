import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  value3: string = '';
  password: string = '';
  constructor() {
    // this.sideBanner.imgPath = 'attachment_edit.png';
  }
  ngOnInit(): void {
    
  }
}
