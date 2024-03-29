import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ToastmessageComponent } from './toastmessage/toastmessage.component';
import {CommonPartsRoutingModule} from './common-parts-routing.module'


@NgModule({
  declarations: [
    HeaderComponent,
    ToastmessageComponent
  ],
  imports: [
    CommonModule,
    CommonPartsRoutingModule
  ],
  exports:[
    HeaderComponent,
    ToastmessageComponent
  ]
})
export class CommonPartsModule { }
