import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Login } from './login';
import { Observable, map, throwError,catchError} from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class LoginService {

  private usersUrl: string;
  private usersUrl2: string;
  private url: string;
  private url2: string;
  // loginid:any;
  // password:any;
  msg:any;
  token:any;

  constructor(private http: HttpClient,private snackBar: MatSnackBar) {
    this.usersUrl = 'http://localhost:8090/CreateAcc';
    this.usersUrl2 = 'http://localhost:8090/CreateAcc2';
    this.url='http://localhost:8090/login'
    this.url2='http://localhost:8090/login2'

  }
  

  public save(login: Login) {
    return this.http.post<Login>(this.usersUrl, login);
  }
  public save2(login: Login) {
    return this.http.post<Login>(this.usersUrl2, login);
  }
  public logincheck(loginid: any, password: any): Observable<string> {
    const url1 = `${this.url}/${loginid}/${password}`;
    console.log(url1);
    console.log(loginid);
    this.token=loginid;
   // console.log(LoginService.token);
    // Return the observable created by the HTTP request
    return this.http.get(url1, { responseType: 'text' }).pipe(
      catchError(this.handleError));
 
  }
  public logincheck2(loginid: any, password: any): Observable<string> {
    
    const url2 = `${this.url2}/${loginid}/${password}`;
    console.log(url2);
  
    // Return the observable created by the HTTP request
    return this.http.get(url2, { responseType: 'text' }).pipe(
      catchError(this.handleError));
 
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
  private showSnackBar(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 5000, // Duration in milliseconds
    });
  }
}