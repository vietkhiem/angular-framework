import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.css']
})
export class GenderComponent implements OnInit {

  @Input() gender: any;

  constructor() { }

  ngOnInit(): void {
  }

}
