import { Injectable } from '@angular/core';
import { fruitsInfo } from '../../Model/fruitsInfo';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { tap, finalize, catchError } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class FruitsInfoService {
 
  task:AngularFireUploadTask;
  percentage:Observable<number>;
  snapshot:Observable<any>;
  toast:any; 
  
  constructor(private db:AngularFireDatabase,
    private storage:AngularFireStorage,
    private toastController: ToastController) { }

  startUpLoad(frutsInfo: fruitsInfo){
    
    const path=`frutsInfo/${Date.now()}_${frutsInfo.fruitImageFile.name}`;
    frutsInfo.fruitImageUrl=`${Date.now()}_${frutsInfo.fruitImageFile.name}`;
    const ref=this.storage.ref(path);
    
    this.task=this.storage.upload(path,frutsInfo.fruitImageFile);
 

    this.percentage=this.task.percentageChanges();
 
   
    this.snapshot=this.task.snapshotChanges().pipe(
      finalize(async()=>{
        await ref.getDownloadURL().toPromise().then(t=>{
           
          frutsInfo.fruitImageUrl=t;
          console.log(frutsInfo.fruitImageUrl);
          console.log(frutsInfo);
          this.db.list(`frutsInfo/`).push(frutsInfo).then(t=>{
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
