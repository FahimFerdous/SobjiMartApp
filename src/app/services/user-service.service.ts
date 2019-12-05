import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase'; 
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable,of } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  userData:any;
  

  constructor(private db: AngularFireDatabase,private af:AngularFireAuth) {
    this.userData=firebase.database().ref('/users');
   }

   getAllUsers() { 
    return this.db.list('/users');
  }
  save(user: firebase.User) {
    this.db.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email
    });
  }

   signUp(registrationForm){
console.log("sss",registrationForm)
   return this.af.auth
   .createUserWithEmailAndPassword(registrationForm.email,
    registrationForm.password).then( newUser => {      
      this.userData.child(newUser.user.uid).update({
        fullName: registrationForm.name,
        shopName: registrationForm.shopName,
        location: registrationForm.location,
        username:registrationForm.username, 
        password:registrationForm.password      
      });
    });
   }
}
