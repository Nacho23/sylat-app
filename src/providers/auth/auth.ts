import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AppStorageService } from '../../services/app-storage-service';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  public api: string;
  public token: string = this.store.get('token');

  constructor(private http: HttpClient, private store: AppStorageService) {
    this.api = environment.urlApi;
  }

  login(user): Observable<any> {
    let params = JSON.stringify(user);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(this.api + '/access-token', params,
      {
        reportProgress: true, observe: 'events', headers:headers
      }).pipe();
  }

  getUser(user_id): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Token ' + this.token);
    return this.http.get<any>(this.api + `/user/${user_id}`, {reportProgress: true, observe: 'events', headers:headers}).pipe();
  }

  getUserToken(token): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('x-access-token', token);
    return this.http.get<any>(this.api + `/access-token/${token}`, {reportProgress: true, observe: 'events', headers:headers}).pipe();
  }

  getUserEmail(email): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Token ' + this.token);
    return this.http.get<any>(this.api + `/user/email/${email}`, {reportProgress: true, observe: 'events', headers:headers}).pipe();
  }

  logout(token: string): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Token ' + token);
    return this.http.post(this.api + '/logout/', null, {reportProgress: true, observe: 'events', headers: headers}).pipe();
  }

}