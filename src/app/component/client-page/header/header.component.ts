import { ProductCart } from './../../../types/Product';
import { LocalStorageService } from './../../../services/local-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cartItems: ProductCart[] = [];
  cartItemValues: number = 0;

  constructor(
    private lsService: LocalStorageService
  ) {
    this.cartItems = []
  }

  ngOnInit(): void {
    this.onSetCartItems();
    // Cần 1 cách thức nào đó có thể lắng nghe việc thay đổi giá trị của ls
    // Hoặc cho biết khi nào có thể lấy dữ liệu mới
    this.lsService.watchService().subscribe(data => {
      // Khi serviceSubject.next('') thì subscribe sẽ được gọi
      this.onSetCartItems();
    });
  }

  onSetCartItems() {
    this.cartItems = this.lsService.getItem();
    this.cartItemValues = 0;
    this.cartItems.forEach(item => {
      this.cartItemValues += item.value;
    });
  }

}
