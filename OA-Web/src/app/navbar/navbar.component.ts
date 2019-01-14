import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService) { }
  public loggedIn; 
  ngOnInit() {
    //will need to be used to show or hide some things within the navbar *ngIf
    //Show when logged in:
    //Profile, LogOut, all the games, 
    //Show when not logged in:
    //Log in link, highscores, about
    this.loggedIn = true; //this.loggedIn = this.authService.checkLoggedIn();
    console.log(this.loggedIn);
  }

}
