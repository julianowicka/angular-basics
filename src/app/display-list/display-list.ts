import { Component, input, output } from '@angular/core';
import { ToDoModel } from '../to-dos/to-do.model';

@Component({
  selector: 'app-display-list',
  standalone: true,
  imports: [],
  templateUrl: './display-list.html',
  styleUrl: './display-list.css'
})
export class DisplayListComponent {
  todos = input<ToDoModel[]>()
  onToChangeStatus = output<number>()

  changeStatus(id: number) {
    this.onToChangeStatus.emit(id)
  }
}

