import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResetPasswordModel } from '../../domain/resetpasswordModel';


@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {

  private apiUrl = 'http://www.sutramsol.in:8080/coaching-onboard-service-dev/api/auth/reset-password';

  constructor(private http: HttpClient) {}

  resetPassword(data: ResetPasswordModel): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
