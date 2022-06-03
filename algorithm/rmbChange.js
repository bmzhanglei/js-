

// 考试题目和要点：

// 1、中文大写金额数字前应标明“人民币”字样。中文大写金额数字应用壹、贰、叁、肆、伍、陆、柒、捌、玖、拾、佰、仟、万、亿、元、角、分、零、整等字样填写。

// 2、中文大写金额数字到“元”为止的，在“元”之后，应写“整字，如532.00应写成“人民币伍佰叁拾贰元整”。在”角“和”分“后面不写”整字。

// 3、阿拉伯数字中间有“0”时，中文大写要写“零”字，阿拉伯数字中间连续有几个“0”时，中文大写金额中间只写一个“零”字，如6007.14，应写成“人民币陆仟零柒元壹角肆分“。
// 4、10应写作“拾”，100应写作“壹佰”。例如，1010.00应写作“人民币壹仟零拾元整”，110.00应写作“人民币壹佰拾元整”
// 5、十万以上的数字接千不用加“零”，例如，30105000.00应写作“人民币叁仟零拾万伍仟元整”

// 输入描述：
// 输入一个double数

// 输出描述：
// 输出人民币格式
// let num = "76503409010.10"
// let num = "1010.00"
// let num = "6007.14"
let num = "5.07"

const unit = ['元', '整', '角', '分'];
const unitMin = ['', '拾', '佰', '仟'], unitMax = ['', '万', '亿', '万亿'];
const arr = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];

let [integer, decimal] = num.split('.');
let len = Math.ceil(integer.length / 4);
let val = "人民币", arrInt = [];//每四个一组，从后向前截取 

for (let i = 1; i <= len; i++) {
    const startEnd = i == 1 ? [-i * 4] : [-i * 4, (-i + 1) * 4]
    arrInt.push(integer.slice(...startEnd));
}
for (let i = len - 1; i >= 0; i--) {
    let w = readFour(arrInt[i]);
    if (w) {
        val += w + unitMax[i];
    }
}

if(val.toString().length>3){
    val += unit[0]
}

//小数位读取
if (decimal == "00") {
    val += unit[1]
} else {
    val += (decimal[0] > 0?arr[decimal[0]]:"") + (decimal[0] > 0 ? unit[2] : '')
    if (decimal[1] > 0) {
        val += arr[decimal[1]] + unit[3]
    }
}
//最终读取结果
console.log(val)

//每四位读取
function readFour(item) {
    let r = '', len = item.length;
    for (let i = len - 1, j = 0; i >= 0; i--, j++) {
        //对壹拾去壹，并去掉重复的零       
        let n = ((i == 1 && item[j] == 1) ? "" : arr[item[j]]) + (item[j] > 0 ? unitMin[i] : '');
        let prev = r.slice(-1);
        if (!(prev == arr[0] && n == arr[0])) {
            r += n
        }
    }
    r = r.replace(/['零']$/, "");
    return r
}