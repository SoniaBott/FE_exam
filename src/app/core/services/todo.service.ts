import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/shared/models/todo-model';
import { TodoInsert } from 'src/app/shared/models/todo-insert-model';
import { TodoUpdate} from 'src/app/shared/models/todo-update-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
    //passo nel costruttore http per utilizzare le crud
     private http: HttpClient
  ) {
   
   }

  //servizio get per caricare tutti i  todo 
  //ritorna la lista dei todo
  public getAllToDo():Observable<Todo[]>{
    const url: string=environment.baseUrl+"/todo"
    console.log(url)
    return this.http.get<Todo[]>(url);
  }


  //metodo per inserire un nuovo todo, il be manda il todo creato
  public insertTodo(t: TodoInsert):Observable<Todo>{
    const url: string=environment.baseUrl+"/todo"
    return this.http.post<Todo>(url,t)
  }

  //metodo per eliminare un todo in base all'id
  public deleteTodo(id: number):Observable<any>{
    const url: string=environment.baseUrl+"/todo/"+id
   return this.http.delete<any>(url);
  }

  //metodo per modificare il todo il be restituisce il todo modificato
  //ATTENZIONE restituisce anche un nuovo id
  public updateTodo(t: TodoUpdate,id:number):Observable<Todo>{
    const url: string=environment.baseUrl+"/todo/"+id
    console.log(url)
    console.log("sono nella put")
   
    return this.http.put<Todo>(url,t);
  }




}
