export class Note {
  constructor(
    private _title: string,
    private _text: string,
    private _id?: string,
  ) {}

  get title() {
    return this._title;
  }

  get text() {
    return this._text;
  }

  get id() {
    return this._id;
  }
}
