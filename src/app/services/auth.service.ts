import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { TypeLoginRequest, TypeLoginResponse, TypeSignupRequest } from '../types/Auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  signin(data: TypeLoginRequest): Observable<TypeLoginResponse> {
    return this.http.post<TypeLoginResponse>(environment.signin, data);
  }
  signup(data: TypeSignupRequest): Observable<TypeSignupRequest> {
    return this.http.post<TypeSignupRequest>(`${environment.signup}`, data);
  }
}