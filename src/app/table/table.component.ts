import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  // @Input() users: any;
  // Nhận vào với tên là users
  // nhưng gán lại giá trị cho biến tên là teachers
  @Input('users') teachers: any;

  constructor() { }

  ngOnInit(): void {
  }

}
