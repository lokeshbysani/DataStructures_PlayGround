const arr = [10,12,14,15,16,18,19,0,-1]

//Linear Search Implementation . O(n) time complexity
function findMinimum(arr){
    let minimum = Number.MAX_SAFE_INTEGER;
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if(element < minimum){
            minimum = element;
        }
    }
    return minimum
}

console.log(findMinimum(arr))