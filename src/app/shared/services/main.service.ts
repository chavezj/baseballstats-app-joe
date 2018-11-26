import { Injectable, Inject } from '@angular/core';
import { URLSearchParams } from '@angular/http'; //old, get compat for old code < ng5
import { HttpClient, HttpHeaders, HttpParams, HttpHandler } from '@angular/common/http';
//import { BASE_URL } from "../shared/app.api";
import { map, catchError, delay, finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
//import { AppConfigProvider, AppConfig } from '../services/appconfig.provider';
//import { HttpParamsOptions } from '@angular/common/http/src/params';

@Injectable()
export class MainService {

constructor(public http: HttpClient) { }

getMainPage(file: string): Observable<any> {
  return this.http.get(file).pipe(map((response: Response) => 
    response
  ));
}

}
