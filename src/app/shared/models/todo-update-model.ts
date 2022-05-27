//creo l'interfaccia Todo con gli stessi campi del dto che ricevo dal be
export interface TodoUpdate{
    todoText: String
    state:string,
    createdAt:string,
    dueDate:string,

}