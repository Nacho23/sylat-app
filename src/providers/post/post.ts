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
  public token: string = this.store.get('token');

  constructor(private http: HttpClient, private store: AppStorageService) {
    this.api = environment.urlApi;
  }

  getPostCollection(unit_id, query): Observable<any> {
    const params = new HttpParams().set('user_id', query.user_id).set('rol_id', query.rol_id);
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Token ' + this.token);
    return this.http.get<any>(this.api + `/unit/${unit_id}/post`, {params, reportProgress: true, observe: 'events', headers:headers}).pipe();
  }

}
