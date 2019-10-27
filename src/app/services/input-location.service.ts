import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
@Injectable({
  providedIn: 'root'
})
export class InputLocationService {

  constructor(private db:AngularFireDatabase) { }

    save(inputLocation) {
    console.log(inputLocation);
    return this.db.list('/inputLocation').push(inputLocation);
  }

  getAllLocation(){
    return this.db.list('/inputLocation');
  }
}
