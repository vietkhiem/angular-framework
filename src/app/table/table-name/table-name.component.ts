import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-name',
  templateUrl: './table-name.component.html',
  styleUrls: ['./table-name.component.css']
})
export class TableNameComponent implements OnInit {

  // @Input() name: string;
  // prop name được truyền vào từ việc gọi <app-table-name [name]="teacher.name">
  // ở component table cha
  @Input() name: any;

  constructor() {
    this.name = '';
  }

  ngOnInit(): void {
  }

}
