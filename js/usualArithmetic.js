/*js数组的随机排列*/
function arrayRandomSort(array) {
    return Math.random() > .5 ? -1 : 1;
}
var array = [1,2,3,4,5,6,7,8,9];
console.log(array.sort(arrayRandomSort));


/*js判断数组是否是子集*/
/*思路：遍历子集subArray，删除与父集对应的元素，遍历出无法在父集中查找到对应子集的元素，返回false，否则返回true*/

function isSubset(superArray, subArray) {
    superArray = superArray.slice();

    for (var i = 0,len = subArray.length; i < len; i++) {
        if (superArray.indexOf(subArray[i]) === -1 ){
            return false;
        } else {
            superArray.splice(superArray.indexOf(subArray[i]),1);
        }
    }
    return true;
}

var arrayA = [1,2,3,4,5,6];
var arrayB = [2,3,4,5];
var arrayC = [1,2,6,1];

console.log(isSubset(arrayA,arrayB));
console.log(isSubset(arrayA,arrayC));


/*两个大整数相加*/
/*实现超出整数存储范围的两个大整数相加function add(a,b)。注意a和b以及函数的返回值都是字符串。*/

console.log(Number.MAX_SAFE_INTEGER); //9007199254740991
console.log(Number.MIN_SAFE_INTEGER); //-9007199254740991

function add(a,b) {

    let lenA = a.length;
    let lenB = b.length;
    let len = lenA > lenB ? lenA : lenB;

    // 若a，b长度不一样，长度较短的数字字符串前面补齐0
    if (lenA > lenB){
        for (let i = 0; i < lenA - lenB; i++) {
            b = '0' + b;
        }
    } else {
        for (let i = 0; i < lenB - lenA; i++) {
            a = '0' + a;
        }
    }

    // 字符串切割成数组，并翻转，从个位开始运算
    let arrA = a.split('').reverse(),
        arrB = b.split('').reverse(),
        arr = [],// 计算结果数组
        carryAdd = 0;//全局10进位标志，0表示不进位，1向前进一位

    for (let i = 0; i < len; i++) {
        let temp = Number(arrA[i]) + Number(arrB[i]) + carryAdd;//从左至右相加运算
        arr[i] = temp > 9 ? temp - 10 : temp;// 运算结果若大于等于10，需要减去10，并向前进一位
        carryAdd = temp > 9 ? 1 : 0;// 运算结果若大于等于10，需要减去10，并向前进一位
    }

    // 计算结束后，若进位值为1，则继续向前进一位
    if (carryAdd === 1) {
        arr[len] = 1;
    }

    return arr.reverse().join('');//运算结果翻转并返回字符串

}

add("9007199254740992","90071992547409935");


/*实现一个div滑动的动画，由快至慢5s结束*/

/*.demo{
    width:50px;
    height:50px;
    border:1px solid red;
    position:absolute;
    left:0
}
<div class="demo" id="demo"></div>*/

//ele为要移动的盒子，target为目标位置（像素），spd为计数器的频率
var ele = document.getElementById('demo')

function animate(ele,spd){
    var start = Date.now(); // remember start time
    var timer = setInterval(function() {
        var timePassed = Date.now() - start;
        var step = Math.ceil(Math.abs(timePassed - 5000)/10)
        console.log(step)
        if (timePassed >= 5000) {
            clearInterval(timer); // finish the animation after 2 seconds
            return;
        }
        ele.style.left = ele.offsetLeft + step + 'px'
    }, spd);
}


/*页面内有一个input输入框，js原生实现在数组arr查询命中词和autocomplete效果*/

/*<div id="div1">
    <input type="text" id="input" placeholder="有autocomplete的输入框"/>
    <ul id="ul">
    </ul>
  </div>*/

let arr = ['a','apple','abandon','bilibili','beep','before','become','being','highmaintains','by','bye','banana']
let input = document.getElementById('input');
let ul = document.getElementById('ul');

// 监听input事件
input.addEventListener('input', function(event){

    var _value = event.target.value.trim();

    if(_value){

        autoComplete(_value, arr)
    }

    else{

        ul.innerHTML = ''
    }

});

// 模糊匹配startsWith或indexOf进行判断
function autoComplete(str, arr){

    var lis = [];

    arr.forEach( (word)=>{

        if(word.startsWith(str)){// 或者使用word.indexOf(str) !== -1

            lis.push('<li>' + word + '</li>')
        }
    });

    ul.innerHTML = lis.join('')
}

function addToInput(li){

    var _txt = li.innerText;

    input.value = _txt
}

// 监听ul的点击事件
ul.addEventListener('click', function(event){

    if(event.target.tagName.toLowerCase() === 'li'){

        addToInput(event.target)
    }
});


/*页面内有一个正方形元素，实现对其拖拽和放下（考虑浏览器兼容性）*/
