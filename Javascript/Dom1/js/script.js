
console.log(document.getElementById('h1_id'))

let h1 = document.getElementById('h1_id')

h1.innerText = "Javascript"

let p = document.getElementsByTagName('p')

p[0].innerText = "Js"

console.log(p)

let classes = document.getElementsByClassName('custom-class')
console.log(classes)

let query = document.querySelector('.custom-class')
let queryAll = document.querySelectorAll('.custom-class') 

console.log(queryAll)

console.log(document.images)

let img = document.images[0]

img.src = "images/images2.jfif"

img.width = "500"

console.log(img.src)

console.log(document.forms)
console.log(document.scripts)
console.log(document.scripts[0].src)
console.log(document.links)
console.log(document.title)
document.title = "Dom 1"

let inp = document.getElementById('userName_id')

console.log(inp.value)


let section = document.querySelector('#section_id')

// section.className = "bg-info text-white"
// section.className = "text-white"

section.classList.add('bg-info' , 'text-white' , 'border')
section.classList.remove('w-50' , 'text-danger')
section.classList.toggle('mt-5')

section.style.fontSize = "40px"

let customInput = document.getElementById('custom-input')

customInput.placeholder = "Enter user Name"

customInput.setAttribute('value' , 'Nouran' )
customInput.removeAttribute('maxlength')
customInput.toggleAttribute('disabled')

customInput.toggleAttribute('disabled')


function changeImage(){
    let img = document.getElementById('img')
    img.src = "images/images2.jfif"
}






