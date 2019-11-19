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
export class QuestionProvider {

  public api: string;
  public token: string;

  constructor(private http: HttpClient, private store: AppStorageService) {
    this.api = environment.urlApi;
    this.store.get('token').then((result) => {
      this.token = result;
    })
  }

  getQuestionCollection(unit_id, query): Observable<any> {
    const params = new HttpParams().set('date', query.date);
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('x-access-token', this.token);
    return this.http.get<any>(this.api + `/unit/${unit_id}/question`, {params, reportProgress: true, observe: 'events', headers:headers}).pipe();
  }

  postAnswerCollection(userId, answer): Observable<any> {
    let params = Object.assign(answer);
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('x-access-token', this.token);
    return this.http.post<any>(this.api + `/user/${userId}/answer`, params, {reportProgress: true, observe: 'events', headers:headers}).pipe();
  }

  getAnswerCollection(query): Observable<any> {
    const params = new HttpParams().set('user_id', query.user_id);
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('x-access-token', this.token);
    return this.http.get<any>(this.api + `/answer`, {params, reportProgress: true, observe: 'events', headers:headers}).pipe();
  }

  getAnswerResource(question_id) : Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('x-access-token', this.token);
    return this.http.get<any>(this.api + `/question/${question_id}`, {reportProgress: true, observe: 'events', headers:headers}).pipe();
  }
}
