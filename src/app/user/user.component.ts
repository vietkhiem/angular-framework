import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Nơi quản lý tất cả dữ liệu và logic của chức năng user
  formValues = {
    id: 0,
    name: '',
    age: 0,
    email: ''
  };

  users = [
    {
      id: 1,
      name: 'Viekhiem',
      age: 21,
      email: 'Viekhiem@fpt.edu.vn',
    },
    {
      id: 15,
      name: 'Viekhiem1',
      age: 21,
      email: 'Viekhiem@fpt.edu.vn',
    },
    {
      id: 10,
      name: 'Viekhiem2',
      age: 12,
      email: 'Viekhiem@fpt.edu.vn',
    },
  ];

  onParentSubmit(formData: any) {
    //1. Tìm ra id lớn nhất
    const userIds = this.users
      .map(user => user.id)
      .sort((a, b) => a - b); // [1, 10, 15]
    const newId = userIds[userIds.length - 1];

    // Nếu formValues có id = 0 thì là thêm mới -> 2.
    // Nếu formValues có id != 0 thì là chỉnh sửa -> 2.1
    if (this.formValues.id == 0) {
      // 2. Thêm vào mảng
      this.users.push({
        ...formData, // Giá trị con truyền sang
        id: newId + 1
      });
    } else {
      // 2.1 Chỉnh sửa
      const idx = this.users.findIndex((user) => user.id === this.formValues.id);
      if (idx > -1) {
        this.users[idx] = {
          ...formData,
          id: this.formValues.id
        };
      }
    }
  }

  onParentDelete(userId: number) {
    this.users = this.users.filter(user => user.id !== userId);
  }

  onParentEdit(userId: number) {
    // 1. Tìm xem đâu là user được chỉnh sửa
    const editUser = this.users.find(user => user.id === userId);

    if (editUser) {
      return this.formValues = { ...editUser };
    }

    return alert('Không tìm thấy user đó!');
  }
}