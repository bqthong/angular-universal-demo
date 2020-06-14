import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { AppSkeletonComponent } from './components/app-skeleton/app-skeleton.component';

const SHARE_COMPONENTS = [
  SidebarComponent,
  BreadcrumbComponent,
  AppSkeletonComponent
];

@NgModule({
  declarations: [
    ...SHARE_COMPONENTS
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([])
  ],
  exports: [
    ...SHARE_COMPONENTS
  ]
})
export class SharedModule { }
