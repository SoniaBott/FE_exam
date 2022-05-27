import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/shared/models/todo-model';


@Component({
  selector: 'exam-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css']
})
export class HomedetailComponent implements OnInit {

  //prende in input la lista dei todo da mostrare dal container
  @Input()
  todoList: Todo[] = []

  //passa al container che ha la logica l'evento click per fare il routing verso l'insert form
  @Output()
  insertButtonEmitter: EventEmitter<any> = new EventEmitter();

  //emette al padre evento per l'update con l'id del todo da eliminare
  @Output()
  deleteButtonEmmiter: EventEmitter<number> = new EventEmitter<number>();

  //emette al padre evento per l'update con l'id del todo da aggiornare
  @Output()
  updateButtonEmitter:EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }


  goToInsertForm() {
    this.insertButtonEmitter.emit();
  }

  goToUpdateForm(id:number){
    this.updateButtonEmitter.emit(id);

  }

  goToDelete(id:number) {
    this.deleteButtonEmmiter.emit(id)
  }

}
