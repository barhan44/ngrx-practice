export class Todo {
  constructor(
    public title: string,
    public text: string,
    public completed: boolean,
    public id?: number
  ) {}
}
