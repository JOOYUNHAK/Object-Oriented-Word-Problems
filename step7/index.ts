// 7. 인스턴스 변수 2개 이상을 가지지 않는다.
// export class Person {
//   private identifyId: string;
//   private age: number;
//   private address: string;
//   private phoneNumber: string;
// }

export class Person {
  private identifyId: string;
  private profile: Profile;
}

export class Profile {
  private age: number;
  private contactInfo: ContactInfo;
}

export class ContactInfo {
  private address: string;
  private phoneNumber: string;
}
