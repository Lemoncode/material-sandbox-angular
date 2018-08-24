import {
  Component,
  ViewChild,
  AfterContentInit,
  OnInit
} from '@angular/core';
import { CarouselComponent } from './components/carousel/carousel.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterContentInit {
  // We need this to reference our template and pass it around.
  // If we want to access this view child, we need a special hook, AfterViewInit
  @ViewChild('itemContent') itemContentTemplate;
  @ViewChild(CarouselComponent) carouselComponent: CarouselComponent;
  // TODO: Add card type
  // TODO: Move to a service
  cards = [
    {
      id: 1,
      title: 'Groceries',
      content: 'Buy lettuce',
    },
    {
      id: 2,
      title: 'Supplies',
      content: 'Buy hammer',
    }
  ];

  ngOnInit(): void {
    // TODO: Initialize data from service.
  }

  ngAfterContentInit(): void {
    this.cards.forEach((c) => {
      this.carouselComponent
        .addCarouselItem(
          this.itemContentTemplate,
          c
        )
    });
  }

  onCardSelected(card): void {
    this.carouselComponent.activeCarouselItem(card);
  }
}
