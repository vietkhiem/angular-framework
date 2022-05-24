import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  users = [
    {
      id: 1,
      name: 'viekhiem',
      age: 21,
      email: 'khiemnvph10889@fpt.edu.vn'
    },
    {
      id: 2,
      name: 'viekhiem12',
      age: 21,
      email: 'khiemnvph10889@fpt.edu.vn'

    }
  ];
  inputValues = {
    id: 0,
    name: '',
    age: 0,
    email: ''
  };

  onSubmit(userForm: NgForm) { // Nhận toàn bộ form
    //1. Tìm ra id lớn nhất
    const userIds = this.users
      .map(user => user.id)
      .sort((a, b) => a - b); // [1, 10, 15]
    const newId = userIds[userIds.length - 1];

    // Nếu inputValues có id = 0 thì là thêm mới -> 2.
    // Nếu inputValues có id != 0 thì là chỉnh sửa -> 2.1
    if (this.inputValues.id == 0) {
      // 2. Thêm vào mảng
      this.users.push({
        ...userForm.value, // Lấy ra object giá trị của form
        id: newId + 1
      });
    } else {
      // 2.1 Chỉnh sửa
      const idx = this.users.findIndex((user) => user.id === this.inputValues.id);
      if (idx > -1) {
        this.users[idx] = {
          ...userForm.value,
          id: this.inputValues.id
        };
      }
    }
    // 3. Cập nhật lại giá trị ban đầu
    // userForm.resetForm(); // Nếu không truyền gì thì tất cả về null
    userForm.resetForm({
      name: '',
      age: 0,
      email: ''
    });
  }

  onDelete(userId: number) {
    this.users = this.users.filter((user) => user.id !== userId);
  }

  onEdit(userId: number) {
    // 1. Tìm ra user có id là userId truyền vào
    const editUser = this.users.find((user) => user.id === userId);
    console.log(editUser);
    // 2. Nếu tìm ra thì mới gán giá trị lên form
    if (editUser) {
      this.inputValues = { ...editUser };
    }
  }
}
