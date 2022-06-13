import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CategoryCreate, CategoryType } from '../types/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  getCategorys(): Observable<CategoryType[]> {
    return this.http.get<CategoryType[]>(environment.categories);
  }
  getCategory(id: string): Observable<CategoryType> {
    return this.http.get<CategoryType>(`${environment.categories}/edit/${id}`);
  }
  getCategoryseach(id: string): Observable<CategoryType> {
    return this.http.get<CategoryType>(`${environment.categories}/${id}`);
  }
  deleteCategory(id: string | number): Observable<any> {
    return this.http.delete(`${environment.categories}/${id}`);
  }
  createCategory(data: CategoryCreate): Observable<CategoryType> {
    return this.http.post<CategoryType>(`${environment.categories}`, data);
  }
  updateCategory(id: number | string, data: CategoryCreate): Observable<CategoryType> {
    return this.http.put<CategoryType>(`${environment.categories}/${id}`, data);
  }
}
