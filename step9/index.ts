// 9. 게터 / 세터 / 프로퍼티 사용금지

// export class Coupon {
//   private _isUsed: boolean;

//   constructor(isUsed: boolean) {
//     this._isUsed = isUsed;
//   };

//   get isUsed(): boolean {
//     return this._isUsed;
//   }

//   set isUsed(isUsed: boolean) {
//     this._isUsed = isUsed;
//   }
// }

// const coupon = new Coupon(true);

// if (!coupon.isUsed) {
//   coupon.isUsed = true;
// }

export class Coupon {
  private _isUsed: boolean;

  constructor(isUsed: boolean) {
    this._isUsed = isUsed;
  }

  used(): void {
    if (!this._isUsed) {
      throw new Error("이미 사용됨");
    }

    this._isUsed = true;
  }
}

const coupon = new Coupon(false);

coupon.used();
