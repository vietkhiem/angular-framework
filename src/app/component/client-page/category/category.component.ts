import { ProductService } from './../../../services/product.service';
import { CategoryService } from './../../../services/category.service';
import { Product } from './../../../types/Product';
import { BookCate_Type } from './../../../types/Category';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  cates: BookCate_Type[];
  booksInCate: Product[];
  books: Product[];
  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
  ) {
    this.cates = [];
    this.booksInCate = [];
    this.books = [];
  }
  getCategories() {
    return this.categoryService.getCategories().subscribe(data => {
      this.cates = data;
    })
  }
  getBooks() {
    return this.productService.getProducts().subscribe(data => {
      this.books = data;
    })
  }
  getBooksInCate(cateId: string) {
    return this.booksInCate = this.books.filter(book => book.category === cateId && book.status === 0);
  }
  getCategoryName(categoryId: string) {
    return this.cates.find(category => category._id === categoryId)?.name;
  }
  ngOnInit(): void {
    this.getCategories();
    this.getBooks();
  }

}
