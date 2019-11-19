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
export class NewProvider {

  public api: string;
  public token: string;

  constructor(private http: HttpClient, private store: AppStorageService) {
    this.api = environment.urlApi;
    this.store.get('token').then((result) => {
      this.token = result;
    })
  }

  getNewCollection(unit_id): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('x-access-token', this.token);
    return this.http.get<any>(this.api + `/news`, {reportProgress: true, observe: 'events', headers:headers}).pipe();
  }
}
