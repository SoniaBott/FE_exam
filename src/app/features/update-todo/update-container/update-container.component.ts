import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from 'src/app/core/services/todo.service';
import { Todo } from 'src/app/shared/models/todo-model';
import { TodoUpdate } from 'src/app/shared/models/todo-update-model';


@Component({
  selector: 'exam-update-container',
  templateUrl: './update-container.component.html',
  styleUrls: ['./update-container.component.css']
})
export class UpdateContainerComponent implements OnInit {
  private currentTodoId: number = 0;
  todoList: Todo[] = []
  newTodo: TodoUpdate = {
    state: "",
    todoText: "",
    createdAt: "",
    dueDate: ""
  };

  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    //devo recuperare l'id dal path
    this.route.params.subscribe(
      p => {
        this.currentTodoId = p['id']
        console.log(this.currentTodoId)
      }
    )

    // richiedo la lista di update chiamando il servizio getAll
    this.getAllToDoHandler()

  }
  ////////////////////////////////////////////////////////////////////////////
  //update
  public updateHandler(state: string) {

    console.log("ho creato la lista" + this.todoList.length)
    //trovo il todo con l'id preso dal path e creo il todo per la put
    this.todoList.forEach(t => {
      if (t.id == this.currentTodoId) {
        console.log("sono nell'if")
        this.newTodo.state = state

        this.newTodo.dueDate = t.dueDate
        this.newTodo.createdAt = t.createdAt
        this.newTodo.todoText = t.todoText
      }

      console.log("sono questo!" + this.newTodo.state + " " + this.newTodo.createdAt + " " + this.newTodo.dueDate + " " + this.newTodo.todoText)
    },
      //chiamo il servizio
      this.todoService.updateTodo(this.newTodo, this.currentTodoId).subscribe(
        result => {
          console.log(result)
          this.router.navigateByUrl("home")
        },
        error => { console.log(error) }
      )

    )

  }

  //////////////////////////////////////////////////////////



  //riporta alla home dal tasto indietro
  goBackHome() {
    console.log("indietro padre")
    this.router.navigateByUrl("home");
  }

  //Crea la lista di todo
  public getAllToDoHandler() {
    this.todoService.getAllToDo().subscribe(
      result => {

        this.todoList = result;
      },
      error => { console.log(error) }
    )
  }



}
