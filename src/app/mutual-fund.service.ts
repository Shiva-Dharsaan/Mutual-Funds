import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { MutualFund } from './mutual-fund';
import { LoginService } from './loginservice.service';
import { Observable, map, throwError,catchError} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MutualFundService {

  private url: string;

  constructor(private http: HttpClient,private loginService:LoginService) { 
    this.url = 'http://localhost:8090/CreateMf';
  }

  public save(mf: MutualFund) {
    mf.created_by=this.loginService.token;
    console.log(this.loginService.token);
    return this.http.post<MutualFund>(this.url,mf);
  }
}
