import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';

// Services
import { UsersService } from '../services/users.service';

@Injectable({
  providedIn: 'root',
})
export class UserDetailResolverGuard implements Resolve<any> {
  constructor(private usersService: UsersService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.usersService.getUser(route.params.id);
  }
}
