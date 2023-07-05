// we can make any function async, then put promises inside it on await
//async function always returns a promise

console.log("hello")
async function getWeather(){
    let delhiWeather = new Promise((resolve, reject)=>{
        resolve('44 degree')
    })

    let mumbaiWeather = new Promise((resolve, reject)=>{
        resolve('34 degree')
    })

    //----first way of resolving

    // delhiWeather.then(((x)=>console.log(x)))
    // mumbaiWeather.then(((x)=>console.log(x)))

    let withoutAwait =  delhiWeather
    console.log("without a wait")

    console.log("without a wait : ", withoutAwait)

    //------------- second way, using await

    console.log("bfr promise 1")
    let delhiW = await delhiWeather
    console.log("prom 1 resolved  : ", delhiW)
    console.log("bfr promise 2")

    let mumbaiW = await mumbaiWeather
    console.log("prom 2 resolved  : ", mumbaiW)


    return [delhiW,mumbaiW]


}

console.log("welcome to weather control room");
let a=getWeather()
// console.log(a)