import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

}
