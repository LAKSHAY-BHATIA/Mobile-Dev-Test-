// Question5 : Assume there is a object of this format 
// var obj = {
//  “id” : 4, “name” : “abc”,
//  “id” : 10, “name” : “ab2”,
//  “id” : 5, “name” : “abc3”,
//  “id” : 6, “name” : “abc5”
// }
// It can be a dictionary or java object, as per your language of choice. But its key/value pair dictionary simply.

// Write a code to sort the object by id 
// I.e final output should have objected sort by id’s

let arrObj = [{
    id: 4, name : 'abc',
},{
    id: 10, name : 'ab2',
},{
    id: 5, name : 'abc3',
},{
    id: 6, name : 'abc5',
},{
id: 1, name: 'abc0'
}]

arrObj.sort((a,b)=>{
    if(a.id<b.id)
    return -1;
    else if(b.id>a.id)
    return 1
    else
    return 0;
})

console.log(arrObj);