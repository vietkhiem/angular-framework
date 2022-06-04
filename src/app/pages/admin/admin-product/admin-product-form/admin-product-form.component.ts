import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../../services/product.service';

@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.css']
})
export class AdminProductFormComponent implements OnInit {
  productForm: FormGroup;
  productId: string

  constructor(
    private productService: ProductService, // các phương thức call API
    private router: Router, // điều hướng
    private activatedRoute: ActivatedRoute
  ) {
    this.productForm = new FormGroup({
      // name: new FormControl('', Validators.required), // FormControl(giá trị mặc định)
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(32),
        this.onValidateNameHasProduct // chỉ gọi lại tên của hàm validate
      ]), // FormControl(giá trị mặc định)
      // price: new FormControl(0)
    });
    this.productId = '';
  }

  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.params['id'];
    if (this.productId) {
      this.productService.getProduct(+this.productId).subscribe(data => {
        // cập nhật data cho form
        this.productForm.patchValue({
          name: data.name
        })
      })
    }
  }

  // required (control: AbstractControl): ValidationErrors|null {
  //   if (....) {
  //     return {required: true};
  //   }
  //   return null;
  // }

  onValidateNameHasProduct(control: AbstractControl): ValidationErrors | null {
    const inputValue = control.value;

    if (!inputValue.includes('product')) {
      return { hasProductError: true };
    }
    return null;
  }
  redirectToList() {
    this.router.navigateByUrl('/admin/products')
  }
  onSubmit() {
    console.log(this.productForm.value);
    // 1. nhận dữ liệu từ form => this.productForm.value
    const data = this.productForm.value;
    if (this.productId !== '' && this.productId !== undefined) {
      return this.productService.updateProduct(this.productId, data).subscribe(data => {
        this.redirectToList();
      })
    }
    // 2. Call API tạo mới
    return this.productService.createProduct(data).subscribe(data => {
      // 3. Quay lại danh sách product
      this.redirectToList()
      // 3.1 Khi đã quay về list thì ngOnInit trong list sẽ lại được chạy và call API
      // lấy ds mới
    })
  }

}