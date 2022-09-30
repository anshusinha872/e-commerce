import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  name: string = "";
  email:string="";
  pass:string = "";
  phone:string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
