import { Component, OnInit } from '@angular/core';
import { Item } from '../item';

import { DataService } from '../data.service';


@Component({
  selector: 'app-shoping-item',
  templateUrl: './shoping-item.component.html',
  styleUrls: ['./shoping-item.component.css'],
  providers: [DataService]
})
export class ShopingItemComponent implements OnInit {

  shopingItems: Item[] = [];
  toogle: boolean;
  selectedItem :Item;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getItems();
  }
  getItems() {
    this.dataService.getItems().subscribe(res => {
      this.shopingItems = res;
    })
  }

  addItem(data) {
  let newItem: Item = {
      itemName: data.value.itemName,
      itemQuantity: data.value.itemQuantity,
      itemBought: false,
    }
    this.dataService.addItem(newItem).subscribe(res => {
      this.getItems();
    })
  }
  
Edit(item){
  this.toogle =!this.toogle;
  this.selectedItem =item;
  
}
EditItem(data){
  let newItem: Item = {
    _id : this.selectedItem._id,
    itemName: data.value.itemName,
    itemQuantity: data.value.itemQuantity,
    itemBought: false,
  }
  this.dataService.editItem(newItem).subscribe(res => {
    this.getItems();
  })
  this.toogle =!this.toogle;
}
delete(id){
  console.log(id);
  this.dataService.deleteItem(id).subscribe(res => {
    this.getItems();
  })
  
}
}
