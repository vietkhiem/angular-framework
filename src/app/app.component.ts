import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My-App';
  name = 'Khiem';
  class = 'We16304'
  // kieu dl mảng
  students = [
    {
      id: 'PH10889',
      name: 'vietkhiem',
      status: 0
    },
    {
      id: 'PH10888',
      name: 'vietkhiem-12',
      status: 1
    }
  ]

  teachers = [
    {
      id: 1,
      name: 'vietkhiem',
      age: 21,
      gender: 0,
      avatar: 'https://picsum.photos/200/100',
      status: 1
    },
    {
      id: 2,
      name: 'vietkhiem1',
      age: 31,
      gender: 1,
      avatar: 'https://picsum.photos/200/100',
      status: 0
    },
    {
      id: 3,
      name: 'vietkhiem2',
      age: 21,
      gender: 1,
      avatar: 'https://picsum.photos/200/100',
      status: 0
    },
  ];
  studentName = 'VIETKHIEM';
  studentId = 'PH10889';

  // định nghĩa hàm 
  schoolName = '';

  clickH1() {
    console.log("click thành công")

    this.schoolName = 'Poly';
  }
  // định nghĩa hàm click ẩn hiện bảng 
  showStatus = true;
  changeTableStatus() {
    this.showStatus = !this.showStatus
  }

  // Định nghĩa hàm khi thay đổi nội dung input
  inputValue = 'Vietkhiem';
  changeInput(e: any) {
    this.inputValue = e.target.value;
  }
  // Định nghĩa hàm nhận giá trị từ Input
  inputValues = {
    name: '',
    age: '',
    avatar: '',
    gender: '0'
  };
  // onInputName(event: any, info: string) {
  //   this.inputValues.name = event.target.value;
  // }
  // onInputAge(event: any, info: string) {
  //   this.inputValues.age = event.target.value;
  // }
  // key: chỉ đc là giá trị name or age trong inputValues
  onInput(event: any, key: 'name' | 'age' | 'avatar' | 'gender') {
    this.inputValues[key] = event.target.value;
  }
  onSubmit() {
    // Thêm dữ liệu vừa thao tác ở form vào mảng teachers
    this.teachers.push({
      ...this.inputValues,
      age: +this.inputValues.age, //đưa age từ chuỗi input về số
      // bổ sung các thuộc tính còn đang thiếu
      gender: +this.inputValues.gender,
      status: 0,
      id: this.teachers.length + 1
    });
    // Cập nhật lại giá trị cho input ở form:
    // [value]="this.inputValues.name"
    this.inputValues = {
      name: '',
      age: '',
      avatar: '',
      gender: '0'
    };
  }
}
