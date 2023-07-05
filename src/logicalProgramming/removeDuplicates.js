//remove duplicates from an array

let arr = [12,32,12,12,34,23,3,345,213,23,32];

//using Set
let newArr = [...new Set(arr)];
console.log(newArr)

//--------------------------

 //using filter
function removeDuplicatesFilter(arr) {
    return arr.filter((item,
        index) => arr.indexOf(item) === index);
}
 
console.log(removeDuplicatesFilter(arr));

//----------------------------------

//using forEarch
function removeDuplicatesForEach(arr) {
    let unique=[];
     arr.forEach( ele => {
        if(!unique.includes(ele)){
            unique.push(ele)
        }
     });

     return unique;
}
 
console.log(removeDuplicatesForEach(arr));

//--------------------------------------------


function removeDuplicates3(arr) {
    let unique = arr.reduce( (acc, curr) => {
        if(!acc?.includes(curr)){
            acc?.push(curr)
        }
        return acc;
     },[]);

     return unique;
}
 
console.log(removeDuplicates3(arr));

//--------------------------------------------

function removeDuplicates(arr) {
    let unique = [];
    for (i = 0; i < arr.length; i++) {
        if (unique.indexOf(arr[i]) === -1) {
            unique.push(arr[i]);
        }
    }
    return unique;
}
console.log(removeDuplicates(arr));