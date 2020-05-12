export class Todo {
  constructor(
    public title: string,
    public text: string,
    public completed: boolean = false,
    public id?: number
  ) {}
}
