import { Component, OnInit } from '@angular/core';
import { InputLocationService } from '../../services/input-location.service';
import { input_location } from '../../../Model/input-location';
import { fruitsInfo } from '../../../Model/fruitsInfo';
import { Router } from '@angular/router';
import { FruitsInfoService } from '../../services/fruits-info.service';

@Component({
  selector: 'add-fruits-info',
  templateUrl: './add-fruits-info.page.html',
  styleUrls: ['./add-fruits-info.page.scss'],
})
export class AddFruitsInfoPage implements OnInit {

  locations:input_location[]=[];
  fruitsInfo =new fruitsInfo();
  selectedFilesForImage:FileList;

  constructor( private locationService:InputLocationService,
    private router:Router,
    private fruitsInfoService:FruitsInfoService) { }

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

  async save(fruitsInfo:fruitsInfo){
    fruitsInfo.entryDate = new Date().getTime();
    fruitsInfo.fruitImageFile=this.fruitsInfo.fruitImageFile;
    await this.fruitsInfoService.startUpLoad(fruitsInfo);
   // this.router.navigate(['/vegetable-list']);
  }

   uploadFile(event) {
      console.log('event',event);
        this.selectedFilesForImage = event;
        console.log('f', this.selectedFilesForImage);
      this.fruitsInfo.fruitImageFile = this.selectedFilesForImage.item(0);
   }


}
