import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }
  login(data: any): Observable<any> {
    console.log("Hello I am API Services");
    return this.http.post(`${baseUrl}login`, data)
  }
}
