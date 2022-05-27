import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TodoService } from 'src/app/core/services/todo.service';
import { Todo } from 'src/app/shared/models/todo-model';

@Component({
  selector: 'exam-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomecontainerComponent implements OnInit{
  //lista dei todo da passare al detail
  todoList: Todo[] = []
 private subscriptions:Subscription[]=[]

  constructor(
    private todoService: TodoService,
    private router: Router
  ) { }

 

  ngOnInit(): void {
    //all'avvio scatena il servizio per la get di tutti i todo
    this.getAllToDoHandler();
  }

  //handler per il servizio 
  //subscribe è deprecato ma va
  public getAllToDoHandler() {
    this.subscriptions.push(this.todoService.getAllToDo().subscribe(
      result => {
        console.log(result)
        this.todoList = result;
      },
      error => { console.log(error) }
    )
    )
  }

  //salta al component con il form per inserire il nuovo todo
  public insertHandler() {
    this.router.navigateByUrl("insert")
  }

  //salta al component con il form per aggiornare il todo
  public updateHandler(id:number){
    //devo passargli l'id
    this.router.navigateByUrl("update"+"/"+id)
  }

  //usa il servizio delete per cancellare il todo
  public deleteHandler(id: number) {
    this.todoService.deleteTodo(id).subscribe(
      result => {
        console.log(result)
       //aggiungere il refresh della lista
       
       window.location.reload();
     
      },
      error => {
        console.log(error)
      }
    )

  }

}
