import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { signUp } from '../../Model/signup';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserServiceService } from './user-service.service';
import { switchMap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>;
  userInfo:signUp;
  constructor(private route: ActivatedRoute, 
     private afAuth: AngularFireAuth,private router:Router,
     private userservice:UserServiceService) { }
  signIn(email,password){
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
   
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
   
  }
  logout() { 
    this.afAuth.auth.signOut();
  } 

 
}
