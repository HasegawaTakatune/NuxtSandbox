// コンポーネント間の関係性を制御するクラス
export class Relationship {
  // コンポーネント名
  private name: string = '';
  // 関係性
  private relationships: string[] = [];

  // 初期化
  public _Init(name: string, relationship?: string[]): void {
    this.name = name;
    if (relationship) {
      this._Set(relationship);
    }
  }

  // 関係性を設定
  public _Set(relationship: string[]): void {
    this.relationships = relationship;
  }

  // 関係性を取得
  public _Get(): string[] {
    return this.relationships.concat(this.name);
  }

  // 関係性を区切り文字整形して取得
  public _Name(): string {
    const list = this._Get();
    return list.join('-');
  }
}
