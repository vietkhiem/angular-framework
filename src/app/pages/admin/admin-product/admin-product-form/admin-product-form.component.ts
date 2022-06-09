import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../../services/product.service';

@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.css']
})
export class AdminProductFormComponent implements OnInit {
  productForm: FormGroup;
  productId: string;

  constructor(
    private productService: ProductService, // các phương thức call API
    private router: Router, // điều hướng,
    private activateRoute: ActivatedRoute // lấy các tham số trên url
  ) {
    this.productForm = new FormGroup({
      // name: new FormControl('', Validators.required), // FormControl(giá trị mặc định)
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(32),
        this.onValidateNameHasBook // chỉ gọi lại tên của hàm validate
      ]), // FormControl(giá trị mặc định)
      price: new FormControl(0),
      img: new FormControl(''),
      desc: new FormControl(''),
    });
    this.productId = '';
  }

  ngOnInit(): void {
    this.productId = this.activateRoute.snapshot.params['id']; // +'5'

    if (this.productId) {
      this.productService.getProduct(+this.productId).subscribe(data => {
        // Cập nhật data cho form (data: {id: 5, name: '...'})
        this.productForm.patchValue({
          name: data.name,
          price: data.price,
          img: data.img,
          desc: data.desc,
        });
      })
    }
  }

  // required (control: AbstractControl): ValidationErrors|null {
  //   if (....) {
  //     return {required: true};
  //   }
  //   return null;
  // }

  onValidateNameHasBook(control: AbstractControl): ValidationErrors | null {
    const inputValue = control.value;

    if (!inputValue.includes('book')) {
      return { hasBookError: true };
    }

    return null;
  }

  redirectToList() {
    this.router.navigateByUrl('/admin/books');
  }

  onSubmit() {
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
      // this.router.navigate(['/admin', 'products']);
      this.redirectToList();
      // 3.1 Khi đã quay về list thì ngOnInit trong list sẽ lại được chạy và call API
      // lấy ds mới
    })
  }

}