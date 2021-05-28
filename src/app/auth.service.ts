import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
//import 'rxjs/add/operator/map';  //OBSERVABLE
//import 'rxjs/add/observable/forkJoin';

@Injectable({

  providedIn: 'root'

})

export class AuthService {

  authToken: any;
  user: any;
  public userName: any;
  isLoggedIn: boolean;

  constructor(private http: HttpClient) { }

    registerUser(data:any):Observable<any>{

      return this.http.post<any>('http://localhost:3000/register',data)

    }
    authenticateUser(user) {

      return this.http.post<any>('http://localhost:3000/authenticate',user)

    }
    
}
