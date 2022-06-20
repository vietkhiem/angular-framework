import { UserService } from './../../../services/user.service';
import { User } from './../../../types/User';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];
  constructor(
    private userService: UserService
  ) {
    this.users = []
  }

  getUsers() {
    this.userService.getUsers().subscribe(data => {
      this.users = data
      console.log(data);
    })
  }

  onGetList() {
    // Lắng nghe API trả về kq, bao giờ trả về xong thì data sẽ có dữ liệu
    this.userService.getUsers().subscribe((data) => {
      // Khi có dữ liệu sẽ gán về cho danh sách
      this.users = data;
    });
  }

  onDelete(id: string) {
    // confirm
    const confirmDelete = confirm('Bạn có chắc chắn xoá không?');
    // kiểm tra dữ liệu => xoá
    if (confirmDelete && id) {
      this.userService.deleteUser(id).subscribe((data) => {
        // Cập nhật lại danh sách
        this.onGetList();
      })
    }
  }



  ngOnInit(): void {
    this.getUsers();
  }

}
