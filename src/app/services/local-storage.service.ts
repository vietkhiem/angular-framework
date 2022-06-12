import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ProductCart } from '../types/Product';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
  // Định nghĩa xem làm cách nào để lắng nghe được lúc thay đổi của ls
  private serviceSubject = new Subject<string>(); // vừa giống Observerble có thể lắng nghe được, vừa phát được sự kiện để lắng nghe

  watchService(): Observable<any> {
    return this.serviceSubject.asObservable();
  }

  getItem() {
    return JSON.parse(localStorage.getItem('cart') || '[]');
  }

  setItem(addItem: ProductCart) {
    // 1. Cập nhật dữ liệu vào ls
    const cartItems = this.getItem();
    const existItem = cartItems.find((item: ProductCart) => item._id === addItem._id);
    if (!existItem) {
      cartItems.push(addItem);
    } else {
      existItem.value += addItem.value;
    }
    localStorage.setItem('cart', JSON.stringify(cartItems));

    // 2. Phát tín hiệu để lắng nghe bên watchService
    this.serviceSubject.next(''); // báo là vừa thêm rồi đấy, update đi
  }
}
