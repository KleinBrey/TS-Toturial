export default function () {
  // 接口
  interface People {
    say(): void;
    name: string;
    age: number;
  }
  // 抽象基类
  abstract class Gender {
    genderProporty: string;
    protected constructor(gender) {
      this.genderProporty = gender;
    }
    changeGender(val: string): void {}
  }
  // 派生类
  class Person extends Gender implements People {
    name: string;
    age: number;
    constructor(genderProporty, age) {
      super(genderProporty);
      this.age = age;
    }
    changeGender(val: string): void {
      this.genderProporty = val;
    }
    say() {
      console.log(`my age is ${this.age}`);
    }
  }
  // 实例化
  const a = new Person('female', 78);
  a.say();
  a.changeGender('male');
  console.log(a.genderProporty);
}
