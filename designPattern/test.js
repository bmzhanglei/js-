//观察者模式
// class Subject {
//     constructor(name) {
//         this.name = name
//         this.state = 'happy'
//         this.observers = []
//     }
//     attach(obj) {
//         this.observers.push(obj)
//     }
//     setState(state) {
//         if (this.state !== state) {
//             this.state = state
//             this.observers.forEach(fn => fn.update(this))
//         }
//     }
// }

// class Observer {
//     constructor(name) {
//         this.name = name
//     }
//     update(subject) {
//         console.log(subject.state)
//     }
// }
// const baby = new Subject('Baby');
// const father = new Observer('Dad')
// const mother = new Observer('Mom')
// baby.attach(father)
// baby.attach(mother)
// baby.setState('jjj')


let obj = {
    1:1,
    2:2,
    length:1,
    push:[].push,
    unshift:[].unshift
}
console.log(Array.from(obj))
obj.push(7)
obj.push(8)
obj.unshift(9)
console.log(obj)
console.log(Array.from(obj))