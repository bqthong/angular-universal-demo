import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HeaderAdminComponent } from './layouts/header-admin/header-admin.component';
import { FooterAdminComponent } from './layouts/footer-admin/footer-admin.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

const COMMON_COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  HeaderAdminComponent,
  FooterAdminComponent,
  MainLayoutComponent,
  BlankLayoutComponent,
  AdminLayoutComponent
];


@NgModule({
  declarations: [
    ...COMMON_COMPONENTS
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([])
  ],
  exports: [
    ...COMMON_COMPONENTS
  ],
  providers: []
})
export class CoreModule { }
