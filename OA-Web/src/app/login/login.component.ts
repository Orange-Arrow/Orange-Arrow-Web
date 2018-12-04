import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
      
      document.getElementById("user_div").style.display = "block";
      document.getElementById("login_div").style.display = "none";
      
      var user = firebase.auth().currentUser;
      
      if(user != null){
        
        var email_id = user.email;
        var email_verified = user.emailVerified;
        document.getElementById("user_para").innerHTML = "Welcome: " + email_id;
      }
      } else {
        // No user is signed in.
      document.getElementById("user_div").style.display = "none";
      document.getElementById("login_div").style.display = "block";
      }
    });
  }

}
