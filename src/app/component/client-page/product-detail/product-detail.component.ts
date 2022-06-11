import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/types/Product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  constructor(private productService: ProductService,
    private activateRoute: ActivatedRoute
  ) {
    this.product = {
      _id: '',
      name: '',
      price: 0,
      img: '',
      desc: '',
      status: 0,

    };
  }

  ngOnInit(): void {
    // ActivateRoute sẽ có thể đọc biến được truyền vào trên url
    // tên id được định nghĩa ở app-routing :id
    const idFromUrl = this.activateRoute.snapshot.params['id'];

    this.productService.getProduct(idFromUrl).subscribe(data => {
      this.product = data;
      // console.log(this.product);

    })
  }

}
