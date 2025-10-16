import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { loginModel } from '../../domain/loginModel';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  constructor( private http: HttpClient,) { }

  login(payload: loginModel): Observable<any> { 
    const baseUrl = 'http://www.sutramsol.in:8080/coaching-onboard-service-dev/api/auth/login';
  return this.http.post<any>(`${baseUrl}`, payload); 
  }
}
