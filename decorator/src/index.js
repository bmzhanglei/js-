import { mixins } from './mixins.js'

const Foo = {
  foo() { console.log('foo') }
};

@mixins(Foo)
class MyClass {}

let obj = new MyClass();
obj.foo()

// @testable
// class MyTestableClass {
//   // ...
// }

// function testable(target) {
//   target.isTestable = true;
// }

// console.log(MyTestableClass.isTestable == false)