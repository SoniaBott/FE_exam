import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodoInsert } from 'src/app/shared/models/todo-insert-model';


@Component({
  selector: 'exam-insert-detail',
  templateUrl: './insert-detail.component.html',
  styleUrls: ['./insert-detail.component.css']
})
export class InsertDetailComponent implements OnInit {
  //Definisco le variabili ngModel per il form
  insertedText: string = ""
  insertedState: string = ""
  insertedData: string = ""
  minDate:Date=new Date
  //input per la gestione dell'inserimento della tata
  @Input()
  incorrectForm: boolean = false
  //Outuput per mandare al container l'evento per tornare alla home dopo aver premuto indietro
  @Output()
  goBackEmitter: EventEmitter<any> = new EventEmitter<any>();

  //Emetto i dati del form
  @Output()
  insertEmitter: EventEmitter<TodoInsert> = new EventEmitter<TodoInsert>();

  constructor() { }

  ngOnInit(): void {
  }

  completeInsertTodoForm(insertTodoForm: NgForm) {
    const todoInsert: TodoInsert = {
      state: insertTodoForm.value.campoStato,
      todoText: insertTodoForm.value.campoTesto,
      dueDate: insertTodoForm.value.campoData
    }
    console.log("ha inserito i dati nel form insert")
    console.log(insertTodoForm.value.campoData)
    //Emette evento verso il padre
    this.insertEmitter.emit(todoInsert);
    console.log("ho emesso l'evento")
  }

  goBackToHome() {
    this.goBackEmitter.emit();
  }


}
