
var obj = {a:1,b:{bb:2}}
var val  = 9999999
setTimeout(()=>{
   obj.a = 88
},1000)

export {
    obj as aa,
    val
}



export function each(obj, iterator, context) {
// ···
console.log("each")
}
export default function (obj) {
    // ···
    global.each = each
  
console.log("default")
}

export { each as forEach };
export {utils as u} from './utils'