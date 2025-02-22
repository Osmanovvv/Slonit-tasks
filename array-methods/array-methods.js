function mySlice(arr, start = 0, end = arr.length) {
    const result = [];
    for (let i = start; i < end; i++) {
        result.push(arr[i]);
    }
    return result;
}

function myIndexOf(arr, item, from = 0) {
    for (let i = from; i < arr.length; i++) {
        if (arr[i] === item) {
            return i;
        }
    }
    return -1;
}

function myIncludes(arr, item, from = 0) {
    for (let i = from; i < arr.length; i++) {
        if (arr[i] === item) {
            return true;
        }
    }
    return false;
}

const arr = [1, 2, 3, 4, 5];

console.log(mySlice(arr, 1, 3));
console.log(myIndexOf(arr, 3));
console.log(myIncludes(arr, 4));
console.log(myIncludes(arr, 6));
