export class Dictionary {
  public keys: Array<string | null> = [];
  public values: Array<string | number | null> = [];

  public set(key: string | undefined | null, value: string | number | null) {
    if (key === undefined || key === null) return;
    const index = this.keys.indexOf(key);

    if (index != -1) {
      this.values[index] = value;
    }
  }

  public push(key: string | undefined | null, value: string | number | null) {
    if (key === undefined || key === null) return;

    const index = this.keys.indexOf(key);
    if (index == -1) {
      this.keys.push(key);
      this.values.push(value);
    } else {
      this.values[index] = value;
    }
  }

  public join(partition: string = '', key?: string | number): string {
    let result = '';

    // キーを設定している場合
    if (key) {
      const index = this.values.indexOf(key);
      if (index === null || index == -1) return '';

      for (let i = 0; i < index; i++) {
        result = `${result}${partition}${this.values[i]}`;
      }
      return result;
    }

    // キーを設定していなかったら配列全部を連結する
    for (let i = 0; i < this.values.length; i++) {
      const str = this.values[i]?.toString();
      if (str !== undefined && str?.trim() !== '') {
        if (result === '') result = str;
        else result = `${result}${partition}${str}`;
      }
    }
    return result;
  }
}

export class Chain {
  public id: string = '';
  public inputValue: string = '';
  public label: string = '';

  constructor(id?: string, label?: string, value?: string) {
    this.id = id ?? '';
    this.label = label ?? '';
    this.inputValue = value ?? '';
  }

  public static names: Dictionary = new Dictionary();
}

export type ChainData = {
  chain: Chain;
};

export type FullName = {
  fullName: string;
};
