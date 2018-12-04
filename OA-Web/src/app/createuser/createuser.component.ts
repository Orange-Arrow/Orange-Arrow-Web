import { Component, OnInit } from '@angular/core';
import { UsersService } from './../services/users.service';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {
  loggedIn = false;
  constructor(private userService: UsersService) { }

  ngOnInit() {
    if( this.userService.checkLoggedIn()){
      //user is logged in, need to redirect the user to a different page
    }



  }

}
