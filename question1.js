 //Question1: Define an array of numbers (use any random numbers).
//  Write a program to print only the even numbers of the array. 
//  Do not use any library functions, need to do via for loops only


let randomArray = [3,45,6,3,5,3,1,3,2,4,28,46,99,36];

for(let i = 0 ; i < randomArray.length ; i++)
{
    if(randomArray[i]%2 === 0)  //printing only the even numbers of the array
    console.log(randomArray[i])
    
}