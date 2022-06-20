import { BookCate_Type } from './../types/Category';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private http: HttpClient
  ) { }

  getCategories(): Observable<BookCate_Type[]> {
    return this.http.get<BookCate_Type[]>(environment.category);
  }

  getCategory(id: string): Observable<BookCate_Type> {
    return this.http.get<BookCate_Type>(environment.category + '/' + id);
  }

  deleteCategory(id: string): Observable<BookCate_Type> {
    return this.http.delete<BookCate_Type>(environment.category + '/' + id);
  }

  addCategory(category: BookCate_Type): Observable<BookCate_Type> {
    return this.http.post<BookCate_Type>(environment.category, category);
  }

  updateCategory(id: string, category: BookCate_Type): Observable<BookCate_Type> {
    return this.http.put<BookCate_Type>(environment.category + '/' + id, category);
  }

}
