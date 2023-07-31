import { inject } from '@angular/core';
import { CanActivateChildFn, CanActivateFn } from '@angular/router';
import { SellerService } from './services/seller.service';

export const authGuard: CanActivateFn = (route,state) => {
  const sellerService: SellerService = inject(SellerService);
  return sellerService.isSellerLoggedIn;
};

export const authAdminGuard:CanActivateChildFn=(route,state)=>{
  const sellerService: SellerService = inject(SellerService);
  return sellerService.isAdminLoggedIn;

} 

export const ProductGuardService:CanActivateFn=(route,state)=>{
  const sellerService: SellerService = inject(SellerService);
  return sellerService.isAdminLoggedIn;

} 



