import { NgToastService } from 'ng-angular-popup';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  userForm: FormGroup;
  userId: string;
  constructor(
    private userService: UserService, // cung cấp createProduct
    private router: Router, // cung cấp navigate điều hướng
    private activateRoute: ActivatedRoute,// lấy ra các tham số trong url
    private toast: NgToastService

  ) {
    this.userForm = new FormGroup({

      email: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
    this.userId = '0';

  }
  ngOnInit(): void {

    this.userId = this.activateRoute.snapshot.params['id'];
    if (this.userId) {
      this.userService.getUser(this.userId).subscribe(data => {
        // Gán giá trị cho form, patchValue sẽ nhận đầy đủ thuộc tính của form
        this.userForm.patchValue({
          email: data.email,
          password: data.password,
        });
      });
    }
  }
  redirectToList() {
    this.router.navigateByUrl('/admin/users');
  }
  onSubmit() {
    // 1. Lấy dữ liệu từ form
    const submitData = this.userForm.value;

    if (this.userId !== '0' && this.userId !== undefined) {
      return this.userService.updateUser(this.userId, submitData).subscribe(data => {
        this.toast.success({ detail: 'Update successful' })

        this.redirectToList();
      }, () => {
        this.toast.error({ detail: 'Update failed' })
      }
      );
    }

    // 2. Call API (Cần định nghĩa service và router điều hướng)
    return this.userService.addUser(submitData).subscribe((data) => {
      this.toast.success({ detail: 'Add successful' })

      // 3. Sau khi API call thành công sẽ điều hướng về danh sách
      this.redirectToList();
    }, () => {
      this.toast.error({ detail: 'Add failed' })
    }
    )

  }
}