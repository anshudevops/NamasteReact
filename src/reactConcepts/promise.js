// let promise1  = new Promise((resolve, reject)=>{
//     let a=3+4;
//     if(a == 5){
//         resolve("success")
//     }else{
//        reject("failure")

//     }
// })

// promise1.then((message)=>{
//     console.log("message on success is : ",message )
// }).catch((message)=>{
//     console.log("message on failure is : ",message )

// })

//---------------------------------------------------------------

//replacing callback with promise

const userLeft = false;
const userStayed = true;
function watchPromise(){
    return new Promise((resolve, reject)=>{
        if(userLeft){
          reject({ name: 'reject name',
            message: "sad"})
        }
        else if(userStayed){
            resolve({ name: 'resolve name',
            message: "happy"})
        }
        else{
            resolve('user is still watching')
        }
    })
}
watchPromise().then((message)=> {
    console.log('success : ' + message.message)
}).catch((error)=>{
    console.log(error.name+' '+error.message)
})

//-------------
const prom1 = new Promise((resolve,reject)=> {
    resolve("prom1 success")
})
const prom2 = new Promise((resolve,reject)=> {
    resolve("prom2 success")
})
const prom3 = new Promise((resolve,reject)=> {
    resolve("prom3 success")
})

Promise.all([
    prom1,
    prom2,
    prom3
]).then((messages)=>{
    console.log(messages)
})

Promise.race([
    prom1,
    prom2,
    prom3
]).then((message)=>{
    console.log(message)
})