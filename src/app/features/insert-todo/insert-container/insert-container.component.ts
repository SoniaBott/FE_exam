import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from 'src/app/core/services/todo.service';
import { TodoInsert } from 'src/app/shared/models/todo-insert-model';

@Component({
  selector: 'exam-insert-container',
  templateUrl: './insert-container.component.html',
  styleUrls: ['./insert-container.component.css']
})
export class InsertContainerComponent implements OnInit {

  //boolean per controllare che dueDate non sia antecedente ad oggi
  incorrectFormValue: boolean = false

  constructor(private router: Router, private todoService: TodoService) { }

  ngOnInit(): void {
  }

  //Torna alla schermata home dopo che dal detail l'utente ha premuto indietro
  goBackHome() {
    this.router.navigateByUrl("home");
  }

  //inserisce il nuovo todo
  insertHandler(todoInsert: TodoInsert) {
    //prima controlla la due date se dueDate<currentDate il boolean va a true
    const dueDate = new Date(todoInsert.dueDate)
    const currentDate = new Date()
    if (dueDate < currentDate) {
      this.incorrectFormValue = true
    } else {
      //chiamo il servizio per inserire il todo
      this.todoService.insertTodo(todoInsert).subscribe(
        result => {
          console.log(result)
          this.router.navigateByUrl("home")
        },
        error => { console.log(error) }

      )


    }
  }
}
