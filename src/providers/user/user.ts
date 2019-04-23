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
export class UserProvider {

  public api: string;
  public token: string;

  constructor(private http: HttpClient, private store: AppStorageService) {
    this.api = environment.urlApi;
    this.store.get('token').then((result) => {
      this.token = result;
    })
  }

  getUserCollection(query): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('x-access-token', this.token);
    return this.http.get<any>(this.api + `/user?godfather_id=${query.godfather_id}&unit_id=${query.unit_id}`, {reportProgress: true, observe: 'events', headers:headers}).pipe();
  }

  getUserResource(uuid): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('x-access-token', this.token);
    return this.http.get<any>(this.api + `/user/${uuid}`, {reportProgress: true, observe: 'events', headers:headers}).pipe();
  }

  postUserCollection(user, rolId, unitId): Observable<any> {
    let params = Object.assign(user, {rol_id: rolId, unit_id: unitId});
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('x-access-token', this.token);
    return this.http.post<any>(this.api + `/user`, params, {reportProgress: true, observe: 'events', headers:headers}).pipe();
  }

  putUserCollection(user_uuid, user): Observable<any> {
    let params = JSON.stringify(user);
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('x-access-token', this.token);
    return this.http.patch<any>(this.api + `/user/${user_uuid}`, params, {reportProgress: true, observe: 'events', headers:headers}).pipe();
  }

  deleteUserResource(user_uuid): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('x-access-token', this.token);
    return this.http.delete<any>(this.api + `/user/${user_uuid}`, {reportProgress: true, observe: 'events', headers:headers}).pipe();
  }

}