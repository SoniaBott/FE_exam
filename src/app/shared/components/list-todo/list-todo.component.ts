import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../models/todo-model';

@Component({
  selector: 'exam-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {
  //prende in input la lista dei todo da mostrare dal container
  @Input()
  todoList:Todo[]=[]
  
  //emette al padre evento per l'update con l'id del todo da eliminare
  @Output()
  deleteButtonEmmiter: EventEmitter<number> = new EventEmitter<number>();

  //emette al padre evento per l'update con l'id del todo da aggiornare
  @Output()
  updateButtonEmitter:EventEmitter<number> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }
  //emette al padre l'evento delete
  goToDelete(id:number) {
    this.deleteButtonEmmiter.emit(id)
  }
  //emette al padre l'evento update
  goToUpdateForm(id:number){
    this.updateButtonEmitter.emit(id);

  }

}
