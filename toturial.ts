const c = console.log.bind(document);
const s = (val) => JSON.stringify(val);
export default function () {
  class Person {
    people: string;
    constructor(people) {
      // this.people = people;
    }
  }

  class Component {
    static myName: string = '静态名称属性';
    myName: string = '实例名称属性';
  }
  // 你知道的,class其实就是构造函数的语法糖,言归正传他还是一个构造函数
  // 这里是代表Component这个构造函数
  let ComponentFunction = Component;
  // 这里是代表Component这个类的实例类型
  let a: Component = new Component();
  // 这里typeof Component和 Function 还是有差别的
  // let b: typeof Component = ComponentFunction;
  let b: Function = ComponentFunction;
  console.log(a.myName);
  // 这里myName会报错，Property 'myName' does not exist on type // 'Function'. Did you mean 'name'?
  console.log(b.myName);

  type Combinable = string | number;
  interface Arrobj {
    name: string;
    age: number;
  }
  let arr3: Array<Arrobj> = [{ name: 'jimmy', age: 22 }];
  let arr4: Array<Combinable> = ['2', 5666];
}
