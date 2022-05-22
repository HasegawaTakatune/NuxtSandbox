export default class InputClasses {
  public wrapper: string;
  public title: string;
  public input: string;
  public validater: string;

  constructor(data: InputClasses){
    this.wrapper = data.wrapper;
    this.title = data.title;
    this.input = data.input;
    this.validater = data.validater;
  }
}