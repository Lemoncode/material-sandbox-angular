import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { ThirdPartyComponentsModule } from '../third-party-components/third-party-components.module';
import { ListComponent } from './list/list.component';
import { InputComponent } from './input/input.component';

@NgModule({
  imports: [
    CommonModule,
    ThirdPartyComponentsModule
  ],
  declarations: [
    ButtonComponent,
    ListComponent,
    InputComponent
  ],
  exports: [
    ButtonComponent,
    ListComponent,
    InputComponent
  ]
})
export class ComponentsModule { }
