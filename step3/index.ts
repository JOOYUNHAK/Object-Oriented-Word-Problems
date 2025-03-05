// 3. 모든 원시값과 문자열을 포장한다.

class Money {
  private _amount: number;

  constructor(value: number) {
    this.validate(value);
    this._amount = value;
  }

  validate(value: number): void {
    if (value < 0) {
      throw Error("돈은 0원 이상이여야 함.");
    }
  }

  get value(): number {
    return this._amount;
  }
}
