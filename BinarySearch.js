/*
Prerequisite: Input array must be sorted
Algorithm :
1. Assign start and end elements
2. Find mid element mid = (start+end/2)
3. Compare target and mid element
4. if taget is midelement return that index
5. if target is less than middleelement search in left else search in right
6. if start>end : no element found
*/

const arr = [2,8,10,15,17,29,36,78,85,95,99]
const arr2 = [99,95,85,78,36,29,17,15,10,8,2]
const target = 85

console.log(binarySearchAscending(arr,target))
console.log(binarySearchDescending(arr2,target))
console.log(orderAgnosticBS(arr2,target))


//return index. Assuming input array is sorted in descending order
function binarySearchAscending(arr,target){
    let start = 0
    let end = arr.length -1
    let middle;
    while(start<=end){
        middle = Math.floor((start+end)/2)
        if(target > arr[middle]){
            start = middle+1
        }else if(target < arr[middle]){
            end = middle-1
        }else if(target === arr[middle]){
            return middle
        }
    }
    return -1
}

//return index. Assuming input array is sorted in ascending order
function binarySearchDescending(arr,target){
    let start = 0
    let end = arr.length -1
    let middle;
    while(start<=end){
        middle = Math.floor((start+end)/2)
        if(target > arr[middle]){
            end = middle-1
        }else if(target < arr[middle]){
            start = middle+1
        }else if(target === arr[middle]){
            return middle
        }
    }
    return -1
}


//order agnostic Binary search. First we have to find whether array is sorted in ascending or descending and then apply the coressponding function
function orderAgnosticBS(arr,target){
    let start = 0
    let end = arr.length -1
    let middle;
    const isAsc = arr[start] < arr[end]?true:false;
    while(start<=end){
        middle = Math.floor((start+end)/2)
        
        if(target === arr[middle]){
            return middle
        }
        
        if(isAsc){
            if(target < arr[middle]){
                end = middle-1
            }else {
                start = middle+1
            }
        }else{
            if(target > arr[middle]){
                end = middle-1
            }else {
                start = middle+1
            }
        }
    } 
    return -1
}
