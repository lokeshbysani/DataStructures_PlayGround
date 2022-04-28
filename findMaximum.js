const arr = [10,12,14,15,16,18,19,0,-1,1000]

//Linear Search Implementation . O(n) time complexity
function findMaximum(arr){
    let maximum = Number.MIN_SAFE_INTEGER;
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if(element > maximum){
            maximum = element;
        }
    }
    return maximum
}

console.log(findMaximum(arr))