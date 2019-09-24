/*js常见排序算法*/

console.time('随机生成一万的元素的数组');
var array = [];
for (var i = 0; i < 10000; i++) {
    array.push(i);
}
console.log(array);
console.timeEnd('随机生成一万的元素的数组');

/*冒泡排序
* 平均时间复杂度：O(n^2)
* 空间复杂度：O(1)*/

/*基本思想：
* 它重复地走访过要排序的数列，一次比较两个元素，如果它们的顺序错误就把它们交换过来。
* 走访数列的工作是重复地进行直到没有再需要交换，也就是说该数列已经排序完成。*/

/*算法描述
*
* <1>.比较相邻的元素。如果第一个比第二个大，就交换它们两个；
* <2>.对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对，这样在最后的元素应该会是最大的数；
* <3>.针对所有的元素重复以上的步骤，除了最后一个；
* <4>.重复步骤1~3，直到排序完成。
*/

function bubbleSort(arr) {
    let len = arr.length;

    for (let i = 0; i < len; i++) {
        // 双层循环不断的比较并交换元素位置，越大的元素越往外冒泡
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp
            }
        }
    }
    return arr;
}

console.time('冒泡排序耗时');
console.log(bubbleSort(array));
console.timeEnd('冒泡排序耗时');


/*选择排序
* 平均时间复杂度：O(n^2)
* 空间复杂度：O(1)*/

/*基本思想：
* 首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置，
* 然后再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。
* 以此类推，直到所有元素均排序完毕。*/

/*算法描述
*
* <1>.初始状态：无序区为R[1..n]，有序区为空；
* <2>.第i趟排序(i=1,2,3...n-1)开始时，当前有序区和无序区分别为R[1..i-1]和R(i..n）。
* 该趟排序从当前无序区中-选出关键字最小的记录 R[k]，将它与无序区的第1个记录R交换，
* 使R[1..i]和R[i+1..n)分别变为记录个数增加1个的新有序区和记录个数减少1个的新无序区；
* <3>.n-1趟结束，数组有序化了。
*/

function selectionSort(arr) {
    let len = arr.length;
    let minIndex;
    let temp;

    for (let i = 0; i < len-1; i++) {
        minIndex = i;//记录最小值的索引
        // 第二层循环寻找最值
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // 交换最值位置
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}

console.time('选择排序耗时');
console.log(selectionSort(array));
console.timeEnd('选择排序耗时');

/*插入排序*/

/*基本思想
* 插入排序是一种简单直观的排序算法。
* 它的工作原理是通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入。
* 插入排序在实现上，通常采用in-place排序（即只需用到O(1)的额外空间的排序），
* 因而在从后向前扫描过程中，需要反复把已排序元素逐步向后挪位，为最新元素提供插入空间。
*/

/*算法描述
*
* <1>.从第一个元素开始，该元素可以认为已经被排序；
* <2>.取出下一个元素，在已经排序的元素序列中从后向前扫描；
* <3>.如果该元素（已排序）大于新元素，将该元素移到下一位置；
* <4>.重复步骤3，直到找到已排序的元素小于或者等于新元素的位置；
* <5>.将新元素插入到该位置后；
* <6>.重复步骤2~5。
*/


function insertionSort(arr) {
    let len = arr.length;
    for (let i = 1; i < len; i++) {
        let temp = arr[i];//额外存储要进行插入的元素
        let j = i;

        //从后向前扫描
        while (j > 0 && arr[j - 1] > temp) {
            arr[j] = arr[j-1];//若当前元素值比前一位小，前面一位的元素往后挪
            j--;
        }
        arr[j] = temp;
    }
    return arr;
}

console.time('插入排序耗时');
console.log(selectionSort(array));
console.timeEnd('插入排序耗时');
