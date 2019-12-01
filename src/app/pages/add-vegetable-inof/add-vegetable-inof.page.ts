import { Component, OnInit } from '@angular/core';
import { AddVegetableInof } from '../../../Model/AddVegetableInof';
import { AddVegetableInofService } from '../../services/add-vegetable-inof.service';
import { ToastController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { input_location } from '../../../Model/input-location';
import { InputLocationService } from '../../services/input-location.service';

@Component({
  selector: 'add-vegetable-inof',
  templateUrl: './add-vegetable-inof.page.html',
  styleUrls: ['./add-vegetable-inof.page.scss'],
})
export class AddVegetableInofPage implements OnInit {
  addVegetableInof=new AddVegetableInof();
  subscription: Subscription;
  selectedFilesForImage:FileList;
  locations:input_location[]=[];
   toast:any;
   AddVegetableInofService: any;
  constructor( private locationService:InputLocationService,private addVegetableInofService:AddVegetableInofService,
    private toastController: ToastController) { }

    ngOnInit() {

      const allLocationInfos=this.locationService.getAllLocation()
      .snapshotChanges()
      .pipe()
      .subscribe(s=>{
        this.locations = [];
        s.forEach(element => {
  
          var y = element.payload.toJSON();        
          y["key"] = element.key;   
           this.locations.push(y as input_location);
                 
        });
        console.log(this.locations);
      })
    }
    async save(addVegetableInof:AddVegetableInof){
      addVegetableInof.entryDate = new Date().getTime();
      addVegetableInof.vegetableFile=this. addVegetableInof.vegetableFile;
      await this.addVegetableInofService.startUpLoad(addVegetableInof);
     // this.router.navigate(['/vegetable-list']);
    }
     uploadFile(event) {
      console.log('event',event);
        this.selectedFilesForImage = event;
        console.log('f', this.selectedFilesForImage);
      this.addVegetableInof.vegetableFile = this.selectedFilesForImage.item(0);
   }
}
