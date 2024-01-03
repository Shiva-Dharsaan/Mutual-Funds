import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from './loginservice.service';
import { Weightage } from './weightage';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MfWeightageService {
     
  private url: string;
  private url2: string;
  private url3: string;
  private url4: string;
  stockList: any[] = [];
  mutualFunds:any[]=[];
  mutualFund:any;

  constructor(private http: HttpClient,private loginService:LoginService) { 
    this.url = 'http://localhost:8090/addStocksToMf';
    this.url2='http://localhost:8090/ViewStocks/list';
    this.url3='http://localhost:8090/allMutualFunds';
    this.url4='http://localhost:8090/findMutualFund';

  }

  public save(mfs:Weightage) {
    mfs.created_by=this.loginService.token;
    console.log(this.loginService.token);
    return this.http.post(this.url,mfs).pipe(
      catchError(this.handleError));
 ;
  }
  private handleError(error: HttpErrorResponse): Observable<any> {
    let errorMessage = 'An error occurred';
    if (error.error instanceof ErrorEvent) {
        // Client-side error
        errorMessage = error.error.message;
    } else {
        // Server-side error
        console.log('yes');
        errorMessage = error.error;
    }
    return throwError(errorMessage);
}

  getStockList():Observable<any[]>{
    return this.http.get<any[]>(this.url2);
  }

  getAllMutualFunds():Observable<any[]>{
    return this.http.get<any[]>(this.url3);
  }

  getMutualFund(mid:number):Observable<any>{
      // .subscribe(
      //   (response: any) => {
      //     this.mutualFund = response;
      //     console.log(this.mutualFund);
      //   },
      //   (error) => {
      //     console.error('Error loading bank accounts:', error);
      //   }
      // );
      // console.log(this.mutualFunds);
      return this.http.get<any>( `${this.url4}/${mid}`);
  }
  
}
