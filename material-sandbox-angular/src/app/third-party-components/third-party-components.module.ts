import { NgModule } from '@angular/core';
import { 
  MatButtonModule,
  MatListModule,
  MatInputModule 
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatListModule,
    MatInputModule
  ],
  exports: [
    MatButtonModule,
    MatListModule,
    MatInputModule
  ]
})
export class ThirdPartyComponentsModule { }
