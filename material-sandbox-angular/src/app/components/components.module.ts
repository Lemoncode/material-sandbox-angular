import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from './button/button.component';
import { ThirdPartyComponentsModule } from '../third-party-components/third-party-components.module';
import { ListComponent } from './list/list.component';
import { InputComponent } from './input/input.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselItemComponent } from './carousel-item/carousel-item.component';
import { DynamicCarouselItemAnchorDirective } from './dynamic-carousel-item-anchor.directive';

@NgModule({
  imports: [
    CommonModule,
    ThirdPartyComponentsModule
  ],
  declarations: [
    ButtonComponent,
    ListComponent,
    InputComponent,
    CarouselComponent,
    CarouselItemComponent,
    DynamicCarouselItemAnchorDirective
  ],
  exports: [
    ButtonComponent,
    ListComponent,
    InputComponent,
    CarouselComponent,
    CarouselItemComponent
  ],
  entryComponents: [
    CarouselItemComponent
  ]
})
export class ComponentsModule { }
