// question2: Find the maximum consecutive 1's in an array of 0's and 1's.
// Example:
// a) 00110001001110 - Output :3 [Max num of consecutive 1's is 3]
// b) 1000010001 - Output :1 [Max num of consecutive 1's is 1]

const maxConsecutiveOne=(arr)=>{
    let count = max = 0;
    arr.forEach(item=>{
        if(item===1)
        count++;
        else if(item===0){
          if(max<=count)
          max=count;
          count=0;
        }
    })
    return max;
}

let arrayList = [1,0,0,0,1,1,1,1,1,0,0,0];
let maximumOne = maxConsecutiveOne(arrayList);
console.log(`Maximum number consecutive of ones in Array is ${maximumOne}` );