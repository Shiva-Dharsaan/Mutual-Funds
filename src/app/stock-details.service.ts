import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockDetailsService {

  private url: string;
  private url2: string;
  stocks:Observable<any[]> | undefined;

  constructor(private http: HttpClient) { 
    this.url = 'http://localhost:8090/ClosingDate/list';
    this.url2='http://localhost:8090/ClosingPrice/list';

  }

  getStockByDate():Observable<any[]>{
    return this.http.get<any[]>(this.url);
  }

  getStockByName(nameofstock:String):Observable<any[]>{
    return this.http.get<any[]>(`${this.url2}/${nameofstock}`);
  }
}
