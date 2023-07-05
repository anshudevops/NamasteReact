//flat, flatMap, reduceRight

const matrix = [[1,2,3], [4,5,6]]
//flat it 
const flatArr = matrix.flat(1)
console.log(flatArr)
const matrix2 = [[[1,2,3]], [4,5,6],[[[[7,8,9]]]]]
const flatArr2 = matrix.flat(Infinity).reduce((a,v)=> a.push(v),[]);
console.log(flatArr2)
