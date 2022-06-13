import { NgToastService } from 'ng-angular-popup';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryService } from './../../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-category-form',
  templateUrl: './admin-category-form.component.html',
  styleUrls: ['./admin-category-form.component.css']
})
export class AdminCategoryFormComponent implements OnInit {

  categoryForm: FormGroup;
  categoryId: string;
  constructor(
    private categoryService: CategoryService, // cung cấp createProduct
    private router: Router, // cung cấp navigate điều hướng
    private activateRoute: ActivatedRoute,
    private toast: NgToastService// lấy ra các tham số trong url

  ) {
    this.categoryForm = new FormGroup({

      name: new FormControl('', [
        Validators.required,
        Validators.minLength(6),

      ]),
    });
    this.categoryId = '0';

  }
  ngOnInit(): void {

    this.categoryId = this.activateRoute.snapshot.params['id'];
    if (this.categoryId) {
      this.categoryService.getCategory(this.categoryId).subscribe(data => {
        // Gán giá trị cho form, patchValue sẽ nhận đầy đủ thuộc tính của form
        this.categoryForm.patchValue({
          name: data.name,


        });
      });
    }
  }
  redirectToList() {
    this.router.navigateByUrl('/admin/category');
  }
  onSubmit() {
    // 1. Lấy dữ liệu từ form
    const submitData = this.categoryForm.value;

    if (this.categoryId !== '0' && this.categoryId !== undefined) {
      return this.categoryService.updateCategory(this.categoryId, submitData).subscribe(data => {
        this.toast.success({ detail: 'Update successful' })

        this.redirectToList();
      }, () => {
        this.toast.error({ detail: 'Update failed' })
      }
      );
    }

    // 2. Call API (Cần định nghĩa service và router điều hướng)
    return this.categoryService.createCategory(submitData).subscribe((data) => {
      this.toast.success({ detail: 'Add successful' })

      // 3. Sau khi API call thành công sẽ điều hướng về danh sách
      this.redirectToList();
    }, () => {
      this.toast.error({ detail: 'Add failed' })
    }
    )

  }
}
