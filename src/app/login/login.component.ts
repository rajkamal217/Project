import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { prddata } from '../shop';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
add:prddata;
  constructor(private shopserv:ShopService) { 
    this.add=new prddata();
  }

  ngOnInit(): void {
  
  }
  public addprd(){

  }
 
  Viewprd:any;
  public viewprd() {
    this.shopserv.viewproduct().subscribe(a=>{
      this.Viewprd=a;
      console.log(this.Viewprd)}
    );
    }
  }

