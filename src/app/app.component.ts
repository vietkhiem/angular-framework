import { Component } from '@angular/core';

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
      id: 'PH10889',
      name: 'vietkhiem',
      age: 21,
      gender: 0,
      avatar: 'https://picsum.photos/200/100',
      status: 1
    },
    {
      id: 'PH10888',
      name: 'vietkhiem1',
      age: 31,
      gender: 1,
      avatar: 'https://picsum.photos/200/100',
      status: 0
    },
  ];
  studentName = 'VIETKHIEM';
  studentId = 'PH10889';

}
