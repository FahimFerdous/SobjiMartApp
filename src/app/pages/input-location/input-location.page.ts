import { Component, OnInit } from '@angular/core';
import { InputLocationService } from '../../services/input-location.service';
import { ToastController } from '@ionic/angular';
import { input_location } from '../../../Model/input-location';
import { Subscription } from 'rxjs';

@Component({
  selector: 'input-location',
  templateUrl: './input-location.page.html',
  styleUrls: ['./input-location.page.scss'],
})
export class InputLocationPage implements OnInit {
  inputLocation=new input_location();
 subscription: Subscription;
 toast:any;
  InputLocationService: any;
  constructor( private inputLocationservice:InputLocationService,
    private toastController: ToastController) { }

  ngOnInit() {
  }
  
 async save(inputLocation){
    
  await this.inputLocationservice.save(inputLocation).then(t=>{
      this.toast=  this.toastController.create({
        message:'Saved Succesfully',
        duration:2000
      }).then((toastData)=>{
        toastData.present();
      });
    });
   }
}