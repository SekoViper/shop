import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public products:any = [];
  public grandTotal: number =0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(res => {
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }

  removeproduct(product:any){
    this.cartService.removeCartItem(product);
  }

  removeAll(){
    this.cartService.removeAllCart();
  }

}
