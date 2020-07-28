import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularCourse';
  ngOnInit()
  {
    firebase.initializeApp({
     apiKey:"AIzaSyCtn7SV19cJBZAevKJ_jxZv7343ZdAhFU4",
     authDomain: "recipe-book-demo-2020.firebaseapp.com"

    });
  }
}
