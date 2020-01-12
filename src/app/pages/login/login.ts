import { UserServiceService } from './../../services/user-service.service';
import { Component, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';
import { signUp } from '../../../Model/signup';
import { AuthService } from '../../services/auth.service';
import { AppUser } from '../../services/user-service.service';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss'],
})
export class LoginPage {
  appUser= new signUp()
  
  constructor(private auth:AuthService,
    public userData: UserData,
    public router: Router,
    private userService:UserServiceService
  ) { }

  onLogin(form: NgForm) {
   
  }

  onSignup() {
    this.router.navigateByUrl('/signup');
  }


  login(loginForm){
   let users=[];
     this.auth.signIn(loginForm.email,loginForm.password).then(success=>{
        this.userService.getAllUsers().snapshotChanges().subscribe(s=>{
          console.log(s);
          s.forEach(element => {
            var y = element.payload.toJSON();
            y["key"] = element.key;                 
            
            users.push(y);                 
          }); 
        let specificUser=users.find(f=>f.email==success.user.email);
        console.log(specificUser);
        localStorage.setItem('xyz',specificUser.isAdmin);
        })
        
        
   
         
        
          this.router.navigateByUrl('/app/tabs/schedule').then(t=>{
            window.location.reload();
          });
          
                  }).catch(error=>{
                alert(error.message);
            });
        }

     
}
