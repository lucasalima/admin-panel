import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Guards
import { UserDetailResolverGuard } from './guards/details-resolver.guard';

// Components
import { UsersListComponent } from './components/list/list.component';
import { UsersDetailComponent } from './components/detail/detail.component';

const routes: Routes = [
  { path: 'list', component: UsersListComponent },
  {
    path: 'detail/:id',
    component: UsersDetailComponent,
    resolve: {
      details: UserDetailResolverGuard,
    },
  },
  {
    path: '**',
    redirectTo: 'list',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
