import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { take } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private readonly API = `${environment.API}/users`;

  constructor(protected http: HttpClient) {}

  getUsers(params: any) {
    let httpParams = new HttpParams();

    for (let param in params) {
      httpParams = httpParams.append(param, params[param]);
    }

    return this.http.get(`${this.API}`, { params: httpParams }).pipe(take(1));
  }

  getUser(id: number) {
    return this.http.get(`${this.API}/${id}`).pipe(take(1));
  }
}
