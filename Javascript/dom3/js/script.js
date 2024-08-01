let counter = document.getElementById('counter')

setTimeout(()=>{
    console.log('JavsScript')
} , 5000)

console.log('Html')

let i = 0
let set = setInterval(()=>{
    if(i == 100) clearInterval(set)
    counter.innerText = i
    i++
    console.log(i)

} , 100)

console.log(set)