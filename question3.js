// Suppose you have an array of 101 integers. 
// This array is already sorted and all numbers in this array are consecutive.
//  Each number only occurs once in the array except one number which occurs twice.
//   Write a js code to find the repeated number.
// e.g $arr = array(0,1,2,3,4,5,6,7,7,8,9,10...................);
let array_list  = [0,1,2,3,4,5,6,7,8,9,9,10,11,12,13,14,15,16];

let repeatingNumber;
 array_list.forEach((item,index,arr)=>{
    if(item === arr[index+1])
    repetingNumber = item;
})

console.log('repeating number in the array is '+ repetingNumber); 


