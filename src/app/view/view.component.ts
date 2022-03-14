import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private shopserv:ShopService) { }

  ngOnInit(): void {
    this.addprd();
  }
  Allprd:any;
  public addprd(){
    this.shopserv.allproduct().subscribe(a=>{
      this.Allprd=a;
      console.log(this.Allprd)}
      );
  }
}
