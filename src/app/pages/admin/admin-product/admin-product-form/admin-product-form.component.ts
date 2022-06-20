import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { BookCate_Type } from 'src/app/types/Category';
@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.css']
})
export class AdminProductFormComponent implements OnInit {
  productForm: FormGroup;
  productId: string;
  category: BookCate_Type[];
  constructor(
    private productService: ProductService, // cung cấp createProduct
    private router: Router, // cung cấp navigate điều hướng
    private activateRoute: ActivatedRoute,// lấy ra các tham số trong url
    private categoryService: CategoryService,
    private toast: NgToastService
  ) {
    this.productForm = new FormGroup({

      name: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(100),

      ]),

      img: new FormControl('', [
        Validators.required,
      ]),

      price: new FormControl(0, [
        Validators.required,
        Validators.maxLength(5),
      ]),
      sale_price: new FormControl(0, [
        Validators.required,
        Validators.maxLength(5),
      ]),
      desc: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(200),
      ]),

      category: new FormControl(0, [
        Validators.required,
      ]),

    });
    this.productId = '0';
    this.category = [];
  }

  onGetList() {
    this.categoryService.getCategories().subscribe((data) => {
      this.category = data;
      console.log(data)
    });
  }
  ngOnInit(): void {
    this.onGetList();
    this.productId = this.activateRoute.snapshot.params['id'];
    if (this.productId) {
      this.productService.getProduct(this.productId).subscribe(data => {
        // Gán giá trị cho form, patchValue sẽ nhận đầy đủ thuộc tính của form
        this.productForm.patchValue({
          name: data.name,
          price: data.price,
          img: data.img,
          desc: data.desc,
          category: data.category,
          sale_price: data.sale_price
        });
      });
    }
  }
  onValidateNameHasProduct(control: AbstractControl): ValidationErrors | null {
    // 1. Lấy ra value của FormControl name hiện tại
    const { value } = control; // value = control.value;
    // 2. Kiểm tra theo điều kiện chứa từ khoá 'product'
    if (!value.includes('product')) {
      return { hasProductError: true };
    }
    // 3. trả về kq nếu không lỗi
    return null;
  }

  redirectToList() {
    this.router.navigateByUrl('/admin/books');
  }

  onSubmit() {
    // 1. Lấy dữ liệu từ form
    const submitData = this.productForm.value;

    if (this.productId !== '0' && this.productId !== undefined) {
      return this.productService.updateProduct(this.productId, submitData).subscribe(data => {
        this.toast.success({ detail: 'Update successful' })

        this.redirectToList();
      }, () => {
        this.toast.error({ detail: 'Update failed' })
      });
    }

    // 2. Call API (Cần định nghĩa service và router điều hướng)
    return this.productService.createProduct(submitData).subscribe((data) => {
      this.toast.success({ detail: 'More success' })

      // 3. Sau khi API call thành công sẽ điều hướng về danh sách
      this.redirectToList();

    }, () => {
      this.toast.error({ detail: 'add failed' })
    })

  }
}
