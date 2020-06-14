import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const COMMON_COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  NotfoundComponent
];


@NgModule({
  declarations: [
    ...COMMON_COMPONENTS
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ...COMMON_COMPONENTS
  ],
  providers: []
})
export class CoreModule { }
