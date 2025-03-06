// 8. 일급컬렉션을 사용한다.
export class UserCart {
  private items: Item[];

  addItem(item: Item) {
    this.validate();
    this.items.push(item);
  }

  size(): number {
    return this.items.length;
  }

  private validate() {
    if (this.size() > 3) {
      throw new Error();
    }
  }
}

export class Item {}
