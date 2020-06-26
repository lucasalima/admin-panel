import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { SharedComponentsModule } from 'src/app/shared/components/components.module';

// Routing
import { AdminRoutingModule } from './admin-routing.module';

// Components
import { AdminComponent } from './admin.component';

@NgModule({
  declarations: [AdminComponent],
  imports: [CommonModule, SharedComponentsModule, AdminRoutingModule],
})
export class AdminModule {}
