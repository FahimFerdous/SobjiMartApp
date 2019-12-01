import { Injectable } from '@angular/core';
import { AddVegetableInof } from '../../Model/AddVegetableInof';
import { AngularFireDatabase } from '@angular/fire/database';
import { ToastController } from '@ionic/angular';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { tap, finalize, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AddVegetableInofService {
  task:AngularFireUploadTask;
  percentage:Observable<number>;
  snapshot:Observable<any>;
  toast:any; 
  constructor(private db:AngularFireDatabase,
    private storage:AngularFireStorage,
    private toastController: ToastController) { }
  
  getaddVegetableInof(){
    return this.db.list('/addVegetableInof');
  }

  startUpLoad(addVegetableInof:AddVegetableInof){
    
    const path=`addVegetableInof/${Date.now()}_${addVegetableInof.vegetableFile.name}`;
    addVegetableInof.vegetableImageUrl=`${Date.now()}_${addVegetableInof.vegetableFile.name}`;
    const ref=this.storage.ref(path);
    
    this.task=this.storage.upload(path,addVegetableInof.vegetableFile);
 

    this.percentage=this.task.percentageChanges();
 
   
    this.snapshot=this.task.snapshotChanges().pipe(
      finalize(async()=>{
        await ref.getDownloadURL().toPromise().then(t=>{
           
          addVegetableInof.vegetableImageUrl=t;
          console.log(addVegetableInof.vegetableImageUrl);
          console.log(addVegetableInof);
          this.db.list(`addVegetableInof/`).push(addVegetableInof).then(t=>{
                this.toast=  this.toastController.create({
                  message:'Save Successfully !',
                  duration:2000
                 }).then((toastData)=>{
                    toastData.present();
                    });
               });;
          });
      }),
    );
        
    this.snapshot.subscribe(d=>{})
  }

}
