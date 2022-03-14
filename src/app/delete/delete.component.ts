import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { prddata } from '../shop';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
 
  public deleteform:FormGroup=new FormGroup({
    prdname:new FormControl(''),
    pid:new FormControl('')
  })
  
  
   pro:any='';
   prd:prddata;
    constructor(private serv:ShopService) {
      this.prd=new prddata();

    }

  ngOnInit(): void {
  }
  delete(){
    this.serv.delete(this.pro).subscribe(d=>{
      console.log(d);
    });
}
deletesearch(){
    this.serv.deletesearch(this.prd.pid).subscribe(e=>{
      this.pro=e;
      console.log(e);
    });
}
}
