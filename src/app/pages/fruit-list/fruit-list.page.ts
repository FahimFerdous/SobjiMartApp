import { Component, OnInit } from '@angular/core';
import { fruitsInfo } from '../../../Model/fruitsInfo';
import { FruitsInfoService } from '../../services/fruits-info.service';

@Component({
  selector: 'fruit-list',
  templateUrl: './fruit-list.page.html',
  styleUrls: ['./fruit-list.page.scss'],
})
export class FruitListPage implements OnInit {
fruitsInfo:fruitsInfo[]=[];
filteredfruitsInfo:fruitsInfo[]=[];

  constructor(private fruitsInfoService:FruitsInfoService) { }

  ngOnInit() {
    const allfruitsInfo=this.fruitsInfoService.getaddfrutsInfo()
    .snapshotChanges()
    .pipe()
    .subscribe(s=>{
      this.fruitsInfo = [];
      s.forEach(element => {

        var y = element.payload.toJSON();        
        y["key"] = element.key;   
         this.fruitsInfo.push(y as fruitsInfo);
               
      });
      console.log(this.fruitsInfo);
    })
  }
  filter(query) { 
    console.log(query);
    let filteredProducts = (query) ?
      this.fruitsInfo.filter(p => p.fruitsName.toLowerCase()
      .includes(query.toLowerCase())):
       this.fruitsInfo;      
       this.filteredfruitsInfo=filteredProducts;
       console.log(this.filteredfruitsInfo); 
   }
}
