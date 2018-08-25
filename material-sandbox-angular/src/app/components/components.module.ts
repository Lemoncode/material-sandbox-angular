import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThirdPartyComponentsModule } from '../third-party-components/third-party-components.module';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselItemComponent } from './carousel-item/carousel-item.component';
import { DynamicCarouselItemAnchorDirective } from './dynamic-carousel-item-anchor.directive';

@NgModule({
  imports: [
    CommonModule,
    ThirdPartyComponentsModule
  ],
  declarations: [
    CarouselComponent,
    CarouselItemComponent,
    DynamicCarouselItemAnchorDirective
  ],
  exports: [
    CarouselComponent,
    CarouselItemComponent
  ],
  entryComponents: [
    CarouselItemComponent
  ]
})
export class ComponentsModule { }
