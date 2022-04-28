const usersAges = [12,42,35,12,24,25,28,27,29,15,18]
const searchElement = 12;

// Linear Search implementation. This returns the first occurance of the element if there are multiple elements
//return statement breaks the for loop and gets out from function without executing remaing statements
function linearSearch(inputArr,searchElement){
    for (let i=0; i<inputArr.length ;i++){
        if(searchElement === inputArr[i]){
            return i
    }
}
return -1
}


const index = linearSearch(usersAges,searchElement);
let displayMessage = index === -1?`Search Element Not found`:`Element ${searchElement} found in the index ${index}`
console.log(displayMessage)

//Global Linear Search Implementation . This returns all indexes of search elements

function globalLinearSearch(inputArr,searchElement){
    let results = []
    for(let i=0;i<inputArr.length;i++){
        if(inputArr[i] === searchElement){
            results.push(i)
        }
    }
    if(results.length === 0){
        return -1;
    }
    return results;
}

const results = globalLinearSearch(usersAges,searchElement);
displayMessage = results === -1?`Search Element Not found`:`Element ${searchElement} found in the index ${results}`
console.log(displayMessage)