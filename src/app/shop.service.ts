import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { prddata } from 'src/app/shop';
import { regdata} from './register';


@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http:HttpClient) { }
  public allproduct(){
    return this.http.get("http://localhost:8080/allprd")
  }
    public viewproduct() {
      return this.http.get("http://localhost:8080/viewprd")
    }
    public registermdt(container:regdata) {
      console.log("servpage");
      console.log(container.username);
      return this.http.post('http://localhost:8080/register',container);
    }

    public addProducts(pro:prddata){
      return this.http.post("http://localhost:8080/addProduct",pro);
    }
    public update(pro:prddata){
      return this.http.post("http://localhost:8080/updateProduct",pro);
    }
      public search(pid:any){
        return this.http.get('http://localhost:8080/searchProduct?pid='+pid);
      }
        public delete(pro:prddata){
          return this.http.post("http://localhost:8080/deleteProduct",pro);
        }
        public deletesearch(pid: any){
          return this.http.get('http://localhost:8080/deletesearch?pid='+pid);
        }
  }

