//creo l'interfaccia Todo con gli stessi campi del dto che ricevo dal be
export interface Todo{
    id:number,
    state:string, 
    createdAt:string,
    dueDate:string,
    todoText: string

}