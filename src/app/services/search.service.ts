import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ISearchByKeyResult} from '../interfaces/interfaces';

const ORIGIN = 'http://localhost:3000/api';

const BASE_URL = `${ORIGIN}/search`;

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private readonly http: HttpClient) { }

  public searchByKey(key: string): Observable<ISearchByKeyResult> {
    const params = new HttpParams().set('key', `${key}`);

    return this.http.get<ISearchByKeyResult>(`${BASE_URL}/by-key`, {params});
  }
}
