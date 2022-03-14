import { SelectorMatcher } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { prddata } from '../shop';
import { ShopService } from '../shop.service';
// import { prddata } from 'src/app/shop';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  public updateform:FormGroup=new FormGroup({
  prdname:new FormControl(''),
  pid:new FormControl('')
})


 pro:any='';
 prd:prddata;
  constructor(private serv:ShopService) {
    this.prd=new prddata()
   }

  ngOnInit(): void {
  }

  update(){
      this.serv.update(this.pro).subscribe(b=>{
        console.log(b);
      });
  }
  search(){
      this.serv.search(this.prd.pid).subscribe(c=>{
        this.pro=c;
        console.log(c);
      });
    }
}

