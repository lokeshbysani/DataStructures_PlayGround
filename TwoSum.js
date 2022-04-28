/*
Leet code easy - Pblm 1
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
*/

const nums = [2,7,11,15]
const target = 22

//Bruteforce approach
function twoSum(nums,target){
    const results = []
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j] === target){
                results.push(i)
                results.push(j)
            }
        }
    }
    return results
}

console.log(twoSum(nums,target))