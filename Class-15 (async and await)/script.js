const p1 = new Promise(function(resolve , reject){
    setTimeout(function(){
        resolve('The Promise has been Resolved')
    } , 40000)
   
})

const p2 = new Promise(function(resolve , reject){
    setTimeout(function(){
        resolve('The Promise has been Resolved 2')
    } , 60000)
   
})



function resolvePromise(){
    p1.then(function(result){
        console.log(result)
    })

    console.log('Scaler')
}

async function handlePromise(){
    console.log('Hello')
    let val1 =  await p1
    console.log("Scaler")
    console.log(val1)

    let val2 =  await p2
    console.log("Scaler 2")
    console.log(val2)
}

console.log('Bye')

// async function printName(){
//     console.log('Scaler Create Impact')
// }

//  resolvePromise()

handlePromise()















//  async function printData(){
//    return "hello"
// }

// let dataValue = printData()

// console.log(dataValue)

