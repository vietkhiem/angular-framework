import { BookCate_Type } from './../../../types/Category';
import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-admin-category-list',
  templateUrl: './admin-category-list.component.html',
  styleUrls: ['./admin-category-list.component.css']
})
export class AdminCategoryListComponent implements OnInit {

  categorys: BookCate_Type[];
  constructor(private categoryService: CategoryService,
    private toast: NgToastService) {
    this.categorys = [];
  }

  ngOnInit(): void {
    // với kiểu dữ liệu trả về là Observable thì có phương thức subscribe để lắng nghe
    // bao giờ có kết quả sẽ trả về qua tham số và thực thi tiếp
    this.onGetList();
  }
  onGetList() {
    this.categoryService.getCategories().subscribe((data) => {
      this.categorys = data;
    });
  }
  onDelete(id: string) {
    // confirm
    const confirmDelete = confirm('Are you sure delete?');

    if (confirmDelete && id) {
      // Nếu có id thì xoá -> thực hiện call API xoá
      this.categoryService.deleteCategory(id).subscribe((data) => {
        console.log(data); // {}
        this.toast.success({ detail: 'Delete successful' })

        // Cập nhật lại dữ liệu mới
        this.onGetList();
      }, () => {
        this.toast.error({ detail: 'Failed' })
      })
    }

  }
}
