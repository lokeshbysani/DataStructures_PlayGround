const arr = [10,12,14,15,16,18,19,12]
const target = 12

const str = 'Lokeash Bysani'
const searchTraget = 'L'
//Test for Array
console.log(linearIndexSearch(arr,target))
console.log(linearTargetSearch(arr,target))
console.log(linearBooleanSearch(arr,target))

//Test for Strings
console.log(linearIndexSearch(str,searchTraget))
console.log(linearTargetSearch(str,searchTraget))
console.log(linearBooleanSearch(str,searchTraget))

//Test to return all indices if there are multiple matches
console.log(multipleIndexLinearSearch(arr,target))
console.log(multipleIndexLinearSearch(str,searchTraget))

//Test to search in specific Range of array and string
console.log(searchInRange(arr,target,start = 2,end = 5))
console.log(searchInRange(str,searchTraget,start = 2,end = 5))


// Return index of the target element
function linearIndexSearch(arr,target){
    //check if array has any elements
    if(arr.length === 0){
        return -1
    }

    for (let index = 0; index < arr.length; index++) {
        if (target === arr[index]) {
            return index
        }
    }
    return -1
}

//Return traget element
function linearTargetSearch(arr,target){
    //check if array has any elements
    if (arr.length === 0) {
        return Number.MAX_SAFE_INTEGER
    }

    for(element of arr){
        if(element === target){
            return target
        }
    }
    return Number.MAX_SAFE_INTEGER
}


//Return true value if exists  else return false

function linearBooleanSearch(arr,target){
     //check if array has any elements
     if (arr.length === 0) {
        return false
    }

    for(element of arr){
        if(element === target){
            return true
        }
    }
    return false
}

// Return all indices of traget element if there are multiple matches
function multipleIndexLinearSearch(arr,target){
    const results = []
    //check if array has any elements
    if(arr.length === 0){
        return -1
    }

    for (let index = 0; index < arr.length; index++) {
        if (target === arr[index]) {
            results.push(index)
        }
    }
    if(results.length === 0){
        return -1
    }
    return results
}

//search for element only in specific range of input array
function searchInRange(arr,target,start,end){
    if(arr.length === 0){
        return -1
    }

    for(let index = start;index<=end;index++){
        if(target === arr[index]){
            return index
        }
    }
    return -1
}