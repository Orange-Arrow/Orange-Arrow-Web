import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

//Components
import { DisplayUserComponent } from './display-user/display-user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { WordScrambleComponent } from './word-scramble/word-scramble.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'newuser', component: CreateuserComponent},
  { path: 'forgotpassword', component: ForgotPasswordComponent}, 
  { path: 'profile', component: DisplayUserComponent },
  { path: 'wordscramble', component: WordScrambleComponent},
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {   
}
