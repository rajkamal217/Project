import { Component, OnInit } from '@angular/core';
import { regdata } from '../register';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  value:regdata;
  constructor(private reg:ShopService) {
    this.value=new regdata();

   }

  ngOnInit(): void {

  }
  result:any;
  register() {
    console.log("regpage");
    console.log(this.value.username);
     this.reg.registermdt(this.value).subscribe(abc=>{
     
      this.result=abc;
      console.log(this.result)}); 
  }

}
