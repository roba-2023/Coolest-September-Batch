// Node - Non strict
// global

// 1. globally
console.log(this) // empty obj

// 2. This inside a function
function getValue(){
  console.log(this)
}

getValue()

let obj1 = {
    name : 'Adam',
    age : 24,
    fn1 : function(){
        console.log(this)
    }

} // 3.using it inside obj with a method

obj1.fn1()


let obj2 = {
    name : 'Adam',
    age : 24,
    fn1 : function(){
         function fn2(){
            console.log(this)
         }
          fn2()
    }

} 

obj2.fn1()





