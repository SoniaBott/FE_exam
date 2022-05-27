import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'exam-update-detail',
  templateUrl: './update-detail.component.html',
  styleUrls: ['./update-detail.component.css']
})
export class UpdateDetailComponent implements OnInit {
 updateState:string=""
 //Outuput per mandare al container l'evento per tornare alla home dopo aver premuto indietro
 @Output()
 goBackEmitter:EventEmitter<any>=new EventEmitter<any>();

@Output()
updateEmitter:EventEmitter<string>=new EventEmitter<string>()

 constructor() { }

 ngOnInit(): void {
 }
//invio al padre il nuovo stato
 completeUpdateTodoForm(updateTodoForm:NgForm){
  //Emette evento verso il padre
  this.updateEmitter.emit(updateTodoForm.value.campoStato);
  console.log("ho emesso l'evento")
}
 
//tasto indietro
 goBackToHome(){
   console.log("cliccato indietro figlio")
   this.goBackEmitter.emit();
 }



}
