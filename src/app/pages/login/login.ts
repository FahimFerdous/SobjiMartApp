import { Component, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';
import { signUp } from '../../../Model/signup';
import { AuthService } from '../../services/auth.service';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss'],
})
export class LoginPage {
  appUser= new signUp()

  constructor(private auth:AuthService,
    public userData: UserData,
    public router: Router
  ) { }

  onLogin(form: NgForm) {
   
  }

  onSignup() {
    this.router.navigateByUrl('/signup');
  }
  login(loginForm){
    console.log(loginForm);
     this.auth.signIn(loginForm.email,loginForm.password).then(success=>{ 
    }).catch(error=>{
      alert(error.message);
    });
     }
}
