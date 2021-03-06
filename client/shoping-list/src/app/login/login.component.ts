import { Component, OnInit } from '@angular/core';
import { Item } from '../item';

import { AuthService } from '../auth.service';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  shopingItems: Item[] = [];
  toogle: boolean;
  selectedItem :Item;
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  // getItems() {
  //   this.authService.getItems().subscribe(res => {
  //     this.shopingItems = res;
  //   })
  // }

  login(data) {
    let login= {
      email: data.value.email,
      password: data.value.password,
    }
    this.authService.login(login).subscribe(res => {
    // this.getItems();
    console.log(res);
    
    })
  }
  
  
// Edit(item){
//   this.toogle =!this.toogle;
//   this.selectedItem =item;
  
// }
// EditItem(data){
//   let newItem: Item = {
//     _id : this.selectedItem._id,
//     itemName: data.value.itemName,
//     itemQuantity: data.value.itemQuantity,
//     itemBought: false,
//   }
//   this.AuthService.editItem(newItem).subscribe(res => {
//     this.getItems();
//   })
//   this.toogle =!this.toogle;
// }
// delete(id){
//   console.log(id);
//   this.dataService.deleteItem(id).subscribe(res => {
//     this.getItems();
//   })
  
// }
}
