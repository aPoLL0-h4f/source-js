// Big O Notation : đo lường độ phức tạp của 1 thuật toán nào đó

console.log("---------bubble sort------------");
// bubble sort
function bubbleSort(array){
    // coppy mảng mới để mảng gốc ko bị thay đổi
    const arr = [...array]; // spread operator

    for(let i = 0 ; i<arr.length; i++){
        for(let j = 0 ; j<arr.length - i ; j++){
            let num = arr[j];
            let next = arr[j+1];
            if(num > next){
                // nếu làm như này thì mảng vẫn giữ nguyên
                // const temp = next;
                // next = num
                // num = temp

                // nên sẽ làm như này
                // const temp = arr[j+1];
                // arr[j+1] = arr[j];
                // arr[j] = temp;

                // cách trên chưa tối ưu nên dùng cách Destructoring
                [arr[j+1], arr[j]] = [arr[j], arr[j+1]];
            }
        }
    }
    return arr;
}
const a=[1,5,4,8,43,32,123,0,92,63,55,999];
console.log(bubbleSort(a));



console.log("---------Insertion sort------------");


console.log("---------Selection  sort------------");
function selectionSort(array){
    for(let i=0 ; i<array.length - 1 ;i++){
        let minIndex = i;
        for(let j = i+1 ;j<array.length; j++){
            if(array[j] < array[minIndex]){
                minIndex = j;
            }
        }
        [array[i], array[minIndex]] = [array[minIndex],array[i]];
    }
    return array;
}
const a3 = [5,3,4,1,2];
console.log(selectionSort(a3));

console.log("---------Quick  sort------------");
// chia để trị
// pivot
function quickSort(arr){
    const list = [...arr];
    if(list.length < 2){
        return list;
    }
    const pivot = list[0];
    const smaller = list.filter(item => item < pivot);
    const bigger =  list.filter(item => item > pivot);

    return [...quickSort(smaller), pivot, ...quickSort(bigger)];
}
const a4 = [3,7,9,0,1,5,4,2];
console.log(quickSort(a4));

console.log("---------Binary Search------------");
// hoạt động trên mảng đã đc sắp xếp r
 function binarySearch(list , item){
    let low = 0;
    let high = list.length - 1;
    while(low <= high){
        let midIndex = Math.floor((low+high)/2);
        const midValue = list[midIndex];
        if(midValue === item){
            return midIndex;
        }
        if(midValue > item){
            high = midIndex - 1;
        }else{
            low = midIndex + 1;
        }
    }
 }

const a5 = [1,3,5,7,11,13,19,23,29,31,37,41,43,47,53,59];
console.log(binarySearch(a5, 37));

console.log("---------Interpolation  Search------------");
// cải tiến của binary search
function binarySearch(list , item){
    let low = 0;
    let high = list.length - 1;
    while(low <= high){
        let midIndex = low + Math.floor(((high - low) * (item - list[low])) / (list[high]- list[low]));
        const midValue = list[midIndex];
        if(midValue === item){
            return midIndex;
        }
        if(midValue > item){
            high = midIndex - 1;
        }else{
            low = midIndex + 1;
        }
    }
 }

const a6 = [1,3,5,7,11,13,19,23,29,31,37,41,43,47,53,59];
console.log(binarySearch(a6, 37));

