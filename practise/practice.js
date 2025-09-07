const p= document.createElement('p')
p.textContent= 'JavaScript is a synchronous single threaded language. Synchronous implies orderly executed and single threaded implies it runs only one command at a time. Everything in JavaScript happens inside an execution context. An execution context has 2 components: Memory Component and Code Component.'
document.body.appendChild(p)
const p1= document.createElement('p')
p1.textContent= 'Memory component is also called variable environment. It is the place where all functions and variables are stored as key- value pairs. Code component is also called thread of execution. It is the place where code is executed line by line. On running JavaScript an execution context is created.'
document.body.appendChild(p1)

var n =2 
function square(num){
    var ans= num*num
    return ans
}
var square2= square(n)
console.log(square2)
console.log(square(4))
// Consider code from 8 to 15 . On running this code a global execution context is created. Execution context is created in 2 phases: Creation phase / memory creation phase and code execution phase. On creation phase, JS  will allocate memeory for all variables and functions.
//  creation phase=>  Exec_ctxt|| memory| n:   Code|