import { AppRoutingModule } from './app-routing.module';
//Components
import { DisplayUserComponent } from './display-user/display-user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppComponent } from './app.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WordScrambleComponent } from './word-scramble/word-scramble.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { LoginComponent } from './login/login.component';

//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from '@angular/fire';
import { AlertModule } from 'ngx-bootstrap';

//Services
import { UsersService } from './services/users.service';
import { AuthService } from './services/auth.service';

import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent, 
    ForgotPasswordComponent, 
    DisplayUserComponent, 
    PageNotFoundComponent,
    NavbarComponent,
    WordScrambleComponent,
    CreateuserComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    AngularFireAuthModule,
    AlertModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    UsersService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
