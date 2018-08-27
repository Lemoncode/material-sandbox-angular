import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselComponent } from './carousel/carousel.component';
import { CarouselItemComponent } from './carousel-item/carousel-item.component';
import { DynamicCarouselItemAnchorDirective } from './dynamic-carousel-item-anchor.directive';

@NgModule({
  imports: [
    CommonModule
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
