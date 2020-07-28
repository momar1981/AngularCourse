
import { NgForm } from '@angular/forms';
import { Router } from '@angular/Router';
import {AuthService} from '../auth.service'
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  
  constructor(private router:Router, private authSRV: AuthService) { }


  ngOnInit(): void {
  }

  onSubmit(iForm : NgForm)
  {
    let email = iForm.value.email;
    let password = iForm.value.password;
    this.authSRV.SignIn(email,password);
  }
}
