import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Material
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatChipsModule } from '@angular/material/chips';

// Modules
import { SharedComponentsModule } from 'src/app/shared/components/components.module';

// Routing
import { UsersRoutingModule } from './users-routing.module';

// Components
import { UsersListComponent } from './components/list/list.component';
import { UsersDetailComponent } from './components/detail/detail.component';

@NgModule({
  declarations: [UsersListComponent, UsersDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatTooltipModule,
    MatChipsModule,
    SharedComponentsModule,
    UsersRoutingModule,
  ],
})
export class UsersModule {}
