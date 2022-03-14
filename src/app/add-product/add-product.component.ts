import { Component, OnInit } from '@angular/core';

import { ShopService } from '../shop.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { prddata } from 'src/app/shop';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

    public addform: FormGroup=new FormGroup({
      prdname:new FormControl(''),
      pid:new FormControl(''),

    })
  


   pro:prddata;
  constructor(private serv:ShopService) {
     this.pro=new prddata();
  }

  ngOnInit(): void {
  }

  addProduct(){
    this.serv.addProducts(this.pro).subscribe(a=>{
      console.log(a);
      
      
    })
  }

}
