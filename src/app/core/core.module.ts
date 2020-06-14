import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';

const COMMON_COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  MainLayoutComponent,
  BlankLayoutComponent
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
