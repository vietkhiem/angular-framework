import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private authService: AuthService,
    private router: Router,
    private toast: NgToastService
  ) {

    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.email),
      password: new FormControl('')
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    // 1. Nhận dữ liệu từ form và call API login
    this.authService.signin(this.loginForm.value).subscribe(data => {
      this.toast.success({ detail: 'Logged in successfully' })
      // 2. Lưu thông tin user vào localStorage: setItem(tên key lưu vào ls, dữ liệu string)
      localStorage.setItem('loggedInUser', JSON.stringify(data));

      setTimeout(() => {
        this.router.navigateByUrl('/admin/books');
      }, 2000)

    }, () => {
      this.toast.error({ detail: 'Email or password is incorrect' })
    });
  }
}
