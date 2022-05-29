// interface Dictionary {
//   [index: string]: string
// }



export class Dictionary {
  public keys: Array<string | null> = [];
  public values : Array<string | number | null> = [];

  public set(key: string| undefined | null, value: string | number | null){
    if(key === undefined || key === null)return;
    const index = this.keys.indexOf(key);

    if(index != -1){
      this.values[index] = value;
    }

    console.log('----------------------');
    console.log(`On set   key: ${key}  value: ${value}`);
    console.log(this.keys);
    console.log(this.values);
    console.log('----------------------');
  }

  public push(key: string | undefined | null, value: string | number | null){
    if(key === undefined || key === null)return;

    const index = this.keys.indexOf(key);
    if(index == -1){
      this.keys.push(key);
      this.values.push(value);
    }else{
      this.values[index] = value;
    }
    console.log('----------------------');
    console.log(`On push  key: ${key}  value: ${value}`);
    console.log(this.keys);
    console.log(this.values);
    console.log('----------------------');
  }

  public join(partition: string = '', key?: string | number): string{
    if(key){
      const index =  this.values.indexOf(key);
      if(index === null || index == -1)return "";

      let result = '';
      for(var i = 0; i < index; i++){
        result = `${result}${partition}${this.values[i]}`;
      }
      return result;
    }

    return this.values.join(partition);
  }  
}

export class Chain{
  public id: string = '';
  public inputValue: string = '';
  public label: string = '';

  constructor(id?: string,  label?: string, value?: string ){
    this.id = id ?? '';
    this.label = label ?? '';
    this.inputValue = value ?? '';
  }

  public static names: Dictionary = new Dictionary;
}

export type ChainData = {
  chain: Chain;
}

export type ChainFirst = {
    firstId: string;
    firstLabel: string;
    firstName: string;
    names: Dictionary;
  }

  export type ChainMiddle = {
    middleId: string;
    middleLabel: string;
    middleName: string;
  }

  export type ChainLast = {
    lastId: string;
    lastLabel: string;
    lastName: string;
    fullName: string | null;
  }

  export type FullName = {
    fullName: string;
  }

  