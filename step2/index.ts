// 2단계 else 키워드를 쓰지 않는다.

type Time = 5 | 9 | 12 | 18 | 22;

// class Clock {
//   private _time: Time;

//   constructor(time: Time) {
//     this._time = time;
//   };

//   printDay() {
//     if (this._time === 5) {
//       console.log('새벽');
//     }
//     else if (this._time === 9) {
//       console.log('오전');
//     }
//     else if (this._time === 12) {
//       console.log('낮');
//     }
//     else if (this._time === 18) {
//       console.log('오후');
//     }
//     else if (this._time === 22) {
//       console.log('저녁')
//     }
//     else {
//       console.log('못찾음')
//     }
//   };
// }

class Clock {
  private _time: Time;

  constructor(time: Time) {
    this._time = time;
  }

  printDay() {
    if (this._time === 5) {
      return console.log("새벽");
    }
    if (this._time === 9) {
      return console.log("오전");
    }
    if (this._time === 12) {
      return console.log("낮");
    }
    if (this._time === 18) {
      return console.log("오후");
    }
    if (this._time === 22) {
      return console.log("저녁");
    }
    return console.log("못찾음");
  }
}
