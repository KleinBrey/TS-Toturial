export default function () {
  function decoratePerson(target: Function) {
    target.prototype.name = 'decorate name';
    target.prototype.say = () => {
      console.log(target.prototype.name);
    };
  }
  @decoratePerson
  class Person {
    constructor() {}
  }
  const student = new Person();
  student.say();
  console.log(student.name);
}
