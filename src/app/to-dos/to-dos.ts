import { Component } from '@angular/core';
import { DisplayListComponent } from '../display-list/display-list';
import { AddToDoComponent } from '../add-to-do/add-to-do';
import { ToDoModel } from './to-do.model';

@Component({
  selector: 'app-to-dos',
  standalone: true,
  imports: [DisplayListComponent, AddToDoComponent],
  templateUrl: './to-dos.html',
  styleUrl: './to-dos.css'
})
export class ToDosComponent {
  list: ToDoModel[] = [
    {
      id: 1,
      title: "wash dishes",
      isDone: false,
    },
    {
      id: 2,
      title: "pet leszek",
      isDone: false,
    },
    {
      id: 3,
      title: "wyprowadz papuge",
      isDone: true,
    },
    
  ]

  lastId = 4

  addItem(todo: string) {
    this.lastId = this.lastId + 1
    const todoObject = {
      id: this.lastId,
      title: todo,
      isDone: false,
    }
    this.list.push(todoObject)
  }

  changeStatus(todoId: number) {
    console.log("todoid", todoId)
    for( let i=0; i < this.list.length; i++){
      if( this.list[i].id == todoId) {
        this.list[i].isDone = true
        this.list[i] = {...this.list[i]}
      }
    }

    
    //this.list = [...this.list] 

  }
}

