import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {
  public loggedIn;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.loggedIn = false; //this.loggedIn = this.authService.checkLoggedIn();
    if( this.loggedIn ){
      window.alert("You are already logged in!")
      this.router.navigate(['profile']);
      //user is logged in, need to redirect the user to a different page, possibly their profile 
      //or just notify they already have an account and are logged in
    }
  }

}
