import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AppStorageService } from '../../services/app-storage-service';

/*
  Generated class for the CommonProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CommonProvider {

  public api: string;
  public token: string;

  constructor(private http: HttpClient, private store: AppStorageService) {
    this.api = environment.urlApi;
    this.store.get('token').then((result) => {
      this.token = result;
    })
  }

  postContactResource(title, body, unit_uuid, user_sender_id): Observable<any> {
    let params = {title: title, body: body, user_sender_id: user_sender_id};
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('x-access-token', this.token);
    return this.http.post<any>(this.api + `/unit/${unit_uuid}/message`, params, {reportProgress: true, observe: 'events', headers:headers}).pipe();
  }
}
