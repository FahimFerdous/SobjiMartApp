import { Component, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserData } from '../../providers/user-data';
import { UserOptions } from '../../interfaces/user-options';
import { signUp } from '../../../Model/signup';
import { UserServiceService } from '../../services/user-service.service';
import { Observable,of } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  styleUrls: ['./signup.scss'],
})
export class SignupPage {
  signUp= new signUp()
  signup: UserOptions = { username: '', password: '' };
  submitted = false;

  constructor(
    public router: Router,
    public userData: UserData,
    public UserService: UserServiceService,
  ) {}

  onSignup(form) {
    this.submitted = true;
console.log(form)
      this.UserService.signUp(form).then(t=>console.log(t))
      this.router.navigateByUrl('/app/tabs/schedule');
   
  }
}
