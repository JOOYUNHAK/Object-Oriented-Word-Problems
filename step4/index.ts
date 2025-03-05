// 4. 한 줄에 점을 하나만 찍는다.

// Before
// class Order {
//   private _coupon: Coupon;

//   constructor(coupon: Coupon) {
//     this._coupon = coupon;
//   }

//   getUsedCouponCode(): string {
//     return this._coupon.template.code;
//   }
// }

// class Coupon {
//   private _couponTemplate: CouponTemplate;

//   constructor(template: CouponTemplate) {
//     this._couponTemplate = template;
//   }

//   get template(): CouponTemplate {
//     return this.template;
//   }
// }

// class CouponTemplate {
//   private _code: string;

//   constructor(code: string) {
//     this._code = code;
//   }

//   get code(): string {
//     return this._code;
//   }
// }

// After
class Order {
  private _coupon: Coupon;

  constructor(coupon: Coupon) {
    this._coupon = coupon;
  }

  getUsedCouponCode(): string {
    return this._coupon.code;
  }
}

class Coupon {
  private _couponTemplate: CouponTemplate;

  constructor(template: CouponTemplate) {
    this._couponTemplate = template;
  }

  get code(): string {
    return this._couponTemplate.code;
  }
}

class CouponTemplate {
  private _code: string;

  constructor(code: string) {
    this._code = code;
  }

  get code(): string {
    return this._code;
  }
}
