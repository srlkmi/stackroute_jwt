import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class MyauthenticateService {

  url:string="http://localhost:3000/auth/v1";

  constructor(private httpcli : HttpClient) 
  { }
 authenticateUser(data)
 {
     return this.httpcli.post(this.url,data);
 }

 setMytoken(tok)
 {
   sessionStorage.setItem("mytoken",tok);
   
 }
 getMytoken()
 {
  let token=sessionStorage.getItem("mytoken");
  return token;
 }
 
 isuserAuthorized(tok)  : Promise <boolean>
 {
      
 return   this.httpcli.post( "http://localhost:3000/auth/v1/isAuthenticated",
     {},
     {
       headers:new HttpHeaders().set('Authorization',`Bearer ${tok}`)
     }).map(
        (res)=> 
        { 
         return (res["isAuthenticated"]);
        }
     ).toPromise();


 } //isuserauthorize
 
}
