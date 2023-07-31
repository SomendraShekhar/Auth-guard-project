import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
constructor(private seller:SellerService,
  private router:Router){

}
}
