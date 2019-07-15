import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { AppStorageService } from '../../services/app-storage-service';

/*
  Generated class for the PostProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PostProvider {

  public api: string;
  public token: string;

  constructor(private http: HttpClient, private store: AppStorageService) {
    this.api = environment.urlApi;
    this.store.get('token').then((result) => {
      this.token = result;
    })
  }

  getCategoryCollection(query): Observable<any> {
    const params = new HttpParams().set('unit_id', query.unit_id);
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('x-access-token', this.token);
    return this.http.get<any>(this.api + '/category', {params, reportProgress: true, observe: 'events', headers:headers}).pipe();
  }

  getPostCollection(unit_id, query): Observable<any> {
    const params = new HttpParams().set('user_id', query.user_id).set('rol_id', query.rol_id);
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('x-access-token', this.token);
    return this.http.get<any>(this.api + `/unit/${unit_id}/post`, {params, reportProgress: true, observe: 'events', headers:headers}).pipe();
  }

  postPostCollection(title, body, category, is_important, unit_uuid, user_sender_id, user_receiver_id): Observable<any> {
    let params = {title: title, body: body, category_id: category, is_important: is_important, user_sender_id: user_sender_id, user_receiver_id: user_receiver_id};
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('x-access-token', this.token);
    return this.http.post<any>(this.api + `/unit/${unit_uuid}/post`, params, {reportProgress: true, observe: 'events', headers:headers}).pipe();
  }

}
