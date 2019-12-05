import { Component, OnInit } from '@angular/core';
import { AddVegetableInofService } from '../../services/add-vegetable-inof.service';
import { AddVegetableInof } from '../../../Model/AddVegetableInof';

@Component({
  selector: 'vegetable-list',
  templateUrl: './vegetable-list.page.html',
  styleUrls: ['./vegetable-list.page.scss'],
})
export class VegetableListPage implements OnInit {
vegetables:AddVegetableInof[]=[];
filteredVegetables:AddVegetableInof[]=[];
q;
  constructor(private vegetableInfoService:AddVegetableInofService) { }

  ngOnInit() {
    const allVegetableInfos=this.vegetableInfoService.getaddVegetableInof()
    .snapshotChanges()
    .pipe()
    .subscribe(s=>{
      this.vegetables = [];
      s.forEach(element => {

        var y = element.payload.toJSON();        
        y["key"] = element.key;   
         this.vegetables.push(y as AddVegetableInof);
               
      });
      console.log(this.vegetables);
    })

  }


  filter(query) { 
    console.log(query);
    let filteredProducts = (query) ?
      this.vegetables.filter(p => p.vegetableName.toLowerCase()
      .includes(query.toLowerCase())) :
       this.vegetables;      
       this.filteredVegetables=filteredProducts;
       console.log(this.filteredVegetables); 
   }

}
