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

  onSubmit(userForm: NgForm) { // nhận toàn bộ form
    // console.log(formData)
    //  Tìm id lớn nhất đang có để +1
    const userIds = this.users
      .map(user => user.id)
      .sort((a, b) => a - b);
    const newId = userIds[userIds.length - 1];
    if (this.inputValues.id == 0) {
      this.users.push({
        ...userForm.value,
        id: newId + 1
      });
    }
    // thêm vào mảng

    // update lại giá trị ban đầu
    userForm.resetForm({
      name: '',
      age: 0,
      email: ''
    });
  }
  onEdit(userId: number) {
    const editUser = this.users.find((user) => user.id === userId)
    if (editUser) {
      this.inputValues = { ...editUser }
    }
  }

  onDelete(userId: number) {
    this.users = this.users.filter((user) => user.id !== userId)
  }
}
