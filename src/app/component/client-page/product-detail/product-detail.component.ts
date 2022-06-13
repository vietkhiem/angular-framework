import { CategoryType } from './../../../types/Category';
import { NgToastService } from 'ng-angular-popup';
import { LocalStorageService } from './../../../services/local-storage.service';
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
  cartItemValue: number = 1;
  cartQty: number;


  constructor(private productService: ProductService,
    private activateRoute: ActivatedRoute,
    private lsService: LocalStorageService,
    private toast: NgToastService,

  ) {
    this.product = {
      _id: '',
      name: '',
      price: 0,
      img: '',
      desc: '',
      status: 0,
      category: '',
      sale_price: 0,
    };
    this.cartQty = 0;

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
  onInputValueChange(event: any) {
    this.cartItemValue = event.target.value;
  }

  onAddToCart() {
    // 1. Định nghĩa cấu trúc dữ liệu thêm vào giỏ
    const addItem = {
      _id: this.product._id,
      name: this.product.name,
      img: this.product.img,
      price: this.product.price,
      sale_price: this.product.sale_price,
      value: +this.cartItemValue,
      quantity: +this.cartItemValue
    };

    this.lsService.setItem(addItem);
    // 5. Cập nhật lại giá trị cho ô input value
    this.cartQty = 1;
    this.toast.success({ detail: 'Add to cart successfully' })

  }

}
