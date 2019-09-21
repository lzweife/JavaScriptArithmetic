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
