import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router'
import { ISignUp,IAdminSignUp } from '../data-type';
@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.scss']
})
export class SellerAuthComponent implements OnInit {
  constructor(private seller:SellerService,
    private router:Router
    ){}
    ngOnInit(): void {
      this.seller.reloadService();
    }
 
  signUp(data:ISignUp):void{

    this.seller.userSignUp(data);
  }
}
