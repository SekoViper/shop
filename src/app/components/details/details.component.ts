import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  public products: any =[];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }


//   productDetails(id: number){
//     this.cartService.getProducts().subscribe(res =>{
//       this.products = res;
//       this.products.find((product:any) => product.id === id )
//     })
//   }
}