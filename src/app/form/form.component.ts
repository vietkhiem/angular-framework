import { Component, OnInit } from '@angular/core';

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

  onSubmit(formData: { name: string, age: number, email: string }) {
    // console.log(formData)
    //  Tìm id lớn nhất đang có để +1
    const userIds = this.users
      .map(user => user.id)
      .sort((a, b) => a - b);
    const newId = userIds[userIds.length - 1];
    // thêm vào mảng
    this.users.push({
      ...formData,
      id: newId + 1
    });
    // update lại giá trị ban đầu
    this.inputValues
  }
}
