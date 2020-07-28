import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {AuthService} from '../auth.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authSRV: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(iForm : NgForm)
  {
    let email = iForm.value.email;
    let password = iForm.value.password;
    this.authSRV.SignUp(email,password);
  }
}