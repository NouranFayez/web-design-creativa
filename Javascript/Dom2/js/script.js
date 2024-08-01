
let input = document.getElementById('input_id')

// input.addEventListener('click' , function(){

// })
input.addEventListener('input' , (e)=>{
    // console.log(e)
    // console.log(e.target.value)
    // console.log(input.value)
})
input.addEventListener('change' , (e)=>{
    // console.log(e)
    // console.log(e.target.value)
    // console.log(input.value)
})

let form = document.querySelector('#form-ID')

form.addEventListener('input' , (e)=>{
    console.log(e.target.value)

})

let div = document.getElementById('div-id')

div.addEventListener('scroll' , (e)=>{
    console.log(e)
})

let body = document.getElementById('body')

body.addEventListener('scroll' , (e)=>{
    // console.log(e)
})

window.addEventListener('scroll' , (e)=>{
    // console.log(e)
    if(document.documentElement.scrollTop > 200) {
        div.style.display = "none"
    }
    else div.style.display = "block"
})


// console.log(document.createElement('div'))

let newDiv = document.createElement('div')
newDiv.innerText = "Lorem "

// body.appendChild(newDiv)


let divContainer = document.getElementById('container-div')

let p = document.createElement('p')
let h1 = document.createElement('h1')
h1.innerText = "Heading 1"
p.innerText = "Paragraph"

h1.innerHTML = "<span>Span in H1</span>"


divContainer.appendChild(newDiv)
divContainer.appendChild(p)
divContainer.prepend(h1)
// divContainer.appendChild(newDiv)



// console.log(newDiv)
