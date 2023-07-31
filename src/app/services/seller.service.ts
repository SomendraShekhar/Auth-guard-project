import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { ISignUp, IAdminSignUp } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class SellerService {
  isSellerLoggedIn= new BehaviorSubject<boolean>(false);
  isAdminLoggedIn = new BehaviorSubject<boolean>(false);
  constructor(private http:HttpClient,private router:Router) { }

  userSignUp(data:ISignUp){
    return this.http.post("http://localhost:3000/seller",data,
    {observe:'response'}).subscribe((res)=>{
      this.isSellerLoggedIn.next(true);
      let val = JSON.stringify(res.body) 
      localStorage.setItem('seller',val)
      if(val.includes('admin')){
        this.isAdminLoggedIn.next(true);
      }
      this.router.navigate(['seller-home']);
    });

  }

  reloadService() {
    if(localStorage.getItem('seller')){
      this.isSellerLoggedIn.next(true);
      this.router.navigate(['seller-home']);
    }
    if(localStorage.getItem('seller')=='admin')
    this.isAdminLoggedIn.next(true);
  }
}
