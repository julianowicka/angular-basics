import { Component, output } from '@angular/core';

@Component({
  selector: 'app-add-to-do',
  standalone: true,
  imports: [],
  templateUrl: './add-to-do.html',
  styleUrl: './add-to-do.css'
})
export class AddToDoComponent {
  onTodoAdded = output<string>()
  
  addTodo() {
    this.onTodoAdded.emit('zadanie dodatkowe')
  }
}

