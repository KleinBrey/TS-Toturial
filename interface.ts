const c = console.log.bind(document);
const s = (val) => JSON.stringify(val);
export default function () {
  class Log {
    render(val) {
      return val;
    }
  }
  const log = new Log();
  log.render(1)
  log.render('2')
  log.render({a:1})

  // class Log<T> {
  //   render(val: T): T {
  //     return val;
  //   }
  // }
  // const log = new Log<string>();
  // log.render('5');
}
