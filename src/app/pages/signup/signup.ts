import { Component, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserData } from '../../providers/user-data';
import { UserOptions } from '../../interfaces/user-options';
import { signUp } from '../../../Model/signup';
import { UserServiceService } from '../../services/user-service.service';
import { Observable,of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import undefined = require('firebase/empty-import');


@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  styleUrls: ['./signup.scss'],
})
export class SignupPage {
  signUp= new signUp()
  signup: UserOptions = { username: '', password: '' };
  submitted = false;
errorMessage:string;
  constructor(
    public router: Router,
    public userData: UserData,
    public UserService: UserServiceService,
  ) {}

  onSignup(form) {
    this.submitted = true;
    console.log(form);

    if(form.email!=""&&form.password!=""&&form.length!= 0&&form.email&&form.password) {
      this.UserService.signUp(form).then(t=>this.router.navigateByUrl('/app/tabs/schedule')).catch(error=>{
        // alert(error.message);
        this.errorMessage=error.message;
      });
  }
      // if(form!=null&&form!=undefined&&form!=""){
       
      // }
     
      
   
  }
}
