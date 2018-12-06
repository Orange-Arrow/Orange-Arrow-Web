import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  resetPassword(email: string) {
    var auth = firebase.auth();
    return auth.sendPasswordResetEmail(email)
      .then(() => console.log("email sent"))
      .catch((error) => console.log(error))
  }
  /*
  helloWorld(){
    return "Hello World";
  }
  */
  login(email,password){
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  checkLoggedIn(){
    firebase.auth().onAuthStateChanged(function(user) {
      return this.user;
    });
    return false;
  }
}
