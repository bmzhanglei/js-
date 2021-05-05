const { couldStartTrivia } = require("typescript")


@log
class MyClass {
	toDo(){
		//do some
	}
}

function log(target) { // 这个 target 在这里就是 MyClass 这个类
   target.prototype.logger = () => `${target.name} 被调用`

   console.log("loggerrrrrr---------")
}

const test = new MyClass()
test.toDo()