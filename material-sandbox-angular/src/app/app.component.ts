import {
  Component,
  ViewChild,
  AfterContentInit,
  OnInit,
  OnDestroy
} from '@angular/core';
import { Observable } from 'rxjs';

import { CarouselComponent } from './components/carousel/carousel.component';
import { Todo } from './todo/todo.model';
import { TodoService } from './todo/todo.service';

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
  selectedItemId: number;
  $todos: Observable<Todo[]>
  
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.$todos = this.todoService.getTodos();
  }

  ngAfterContentInit(): void {
    this.$todos.subscribe((ts) => {
      ts.forEach((t) => {
        this.carouselComponent
          .addCarouselItem(
            this.itemContentTemplate,
            t
          );
      });
    });
  }

  onAdd(): void {
    const genericTodo = {
      id: Date.now(),
      title: 'Item',
      content: 'Item content',
    }
    this.carouselComponent.addCarouselItem(
      this.itemContentTemplate,
      genericTodo
    )
  }

  onCardSelected(todo: Todo): void {
    this.selectedItemId = todo.id;
    this.carouselComponent.activeCarouselItem(todo);
  }

  private resetSelectedItem = () => this.selectedItemId = 0;

  onRemove(): void {
    if (!!this.selectedItemId) {
      this.carouselComponent
        .deleteActiveCarouselItem(this.selectedItemId);
      this.resetSelectedItem();
    }
  }
}
