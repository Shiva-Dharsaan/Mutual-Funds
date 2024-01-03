import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  private url: string;

  constructor(private http: HttpClient) { 
    this.url = 'http://localhost:8090/mf/nav';
  }

  
  getNav():Observable<any[]>{
    return this.http.get<any[]>(this.url);
  }
}
