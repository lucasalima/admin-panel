import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatInputModule } from '@angular/material/input';

// Core Components
import { ModuleWrapperComponent } from './core/module-wrapper/module-wrapper.component';
import { HeaderComponent } from './core/header/header.component';

// Common Components
import { PageHeaderComponent } from './common/page-header/page-header.component';
import { PageBodyComponent } from './common/page-body/page-body.component';
import { BackButtonComponent } from './common/back-button/back-button.component';
import { ProgressBarComponent } from './common/loader/progress-bar/progress-bar.component';

// Form Components
import { FormInputComponent } from './form/form-input/form-input.component';
import { SearchButtonComponent } from './form/search-button/search-button.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ModuleWrapperComponent,
    PageHeaderComponent,
    PageBodyComponent,
    BackButtonComponent,
    ProgressBarComponent,
    FormInputComponent,
    SearchButtonComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatProgressBarModule,
    MatInputModule,
  ],
  exports: [
    ModuleWrapperComponent,
    HeaderComponent,
    PageHeaderComponent,
    PageBodyComponent,
    ProgressBarComponent,
    FormInputComponent,
    SearchButtonComponent,
  ],
})
export class SharedComponentsModule {}
