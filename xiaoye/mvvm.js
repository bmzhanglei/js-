const reg = /\{\{(.+?)\}\}/
class MVVM {
    constructor(el, data) {
        this.el = document.querySelector(el)
        //    this._data = data
        this.data = data
        this.domPool = {}
        this.init()
    }
    init() {
        this.initData()
        this.initDom()
    }
    initDom() {
        this.bindDom(this.el)
        this.bindInput(this.el)
    }
    initData() {
        const _this = this
        //    this.data = {}
        //    for(let k in this._data){
        //        Object.defineProperty(this.data,k,{
        //            get(){
        //                return _this._data[k]
        //            },
        //            set(newValue){
        //               _this.domPool[k].nodeValue = newValue
        //                _this._data[k] = newValue 
        //            }
        //        })
        //    }
        //    console.log(this.data)

        this.data = new Proxy(this.data, {
            get(target, key) {
                return Reflect.get(target, key)
            },
            set(target, key, value) {
                _this.domPool[key].nodeValue = value
                return Reflect.set(target, key, value)
            }
        })
    }
    bindInput(el) {
        const inputs = el.querySelectorAll("input")
        inputs.forEach(input => {
            const _vModel = input.getAttribute("v-model")
            if (_vModel) {
                input.addEventListener("keyup", this.handlerInput.bind(this, _vModel, input), false)
            }
        })
    }
    handlerInput(key, input) {
        this.data[key] = input.value;
        //   console.log(this.data[key])
    }
    bindDom(el) {
        const childNodes = el.childNodes
        childNodes.forEach(item => {
            if (item.nodeType === 3) {
                let _value = item.nodeValue
                if (_value.trim().length) {
                    let _isValid = reg.test(_value)
                    if (_isValid) {
                        let _key = _value.match(reg)[1].trim()
                        this.domPool[_key] = item
                        item.nodeValue = this.data[_key] || "null"
                        // item.nodeValue = "xxx"
                        // console.log(key)
                    }
                }
            }
            item.childNodes && this.bindDom(item)
        })
    }
    setData(key, value) {
        this.data[key] = value;
    }
}
/**
 * 1.数据 -> 响应式的数据 Object.defineProperty Proxy
 * 2. input -> input/keyup -> 事件处理函数的绑定 -> 改变数据
 * 3. 相关的DOM -> 数据 -> 绑定在一起
 *    操作数据的某个属性 -> 对应DOM就改变
 */