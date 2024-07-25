// console.log('javascript 2')

// var firstName = "Nouran"

// console.log(firstName)

// var age = 30

// console.log(age)

// var isGraduated = true

// console.log(isGraduated)

// isGraduated = "false"

// console.log(isGraduated)

// // var lastName 
// var lastName = "Fayez"

// console.log(lastName)

// var familyName = null

// console.log(familyName)


// // var fullName = firstName+ " " +lastName
// // template string

// var fullName = `my fullname =  ${firstName} ${lastName}`

// var num = 5

// var num2 = 10

// var sum = num + num2

// console.log(fullName)

// console.log(sum)

// var f = "10"

// var g = 10

// var j = g+f

// var h = firstName + f

// console.log(j)


// var r = 3
// console.log(r++)
// // console.log(++r)
// console.log(r)

//  var h = 4 
//  console.log(--h) // 3
//  console.log(--h) // 2
// //  console.log(h--) // 3
//  console.log(h) // 2

// var h = 30

// var k = "4"

// var d = h / k // NaN
// var d = k - h

// var n1 = "20"
// var n2 = 40
// var n3 = 50

// var sum = n1 - n2 - n3

// console.log(sum)

/// Assignment Operators 

// var h = 30 
// h = h + 3

// console.log(h+=3)

// var n = 30 
// console.log(typeof n)

/////////////////// comparison operators 

// var h = 20
// var j = 30
// var f = 20

// console.log(j > h)
// console.log(f >= h)

// var n = 30
// var s = "30"

// console.log(n == s) // value ==> true
// console.log(n === s) // value , data type ==> false

// console.log(n != s) // value ==> false
// console.log(n !== s) // value , data type ==> true


///////////////// logical Operators 
var n = 20
var s = 10
var r = 5


console.log(s > n && r < n && typeof s == "number") // false

// && ==> true , false , true = false
// && ==> true , true , true = true

// console.log(s == 30 || s > r || typeof s == "string") // true

// || ==> true , false , false = true 
// || ==> false , false , false = false 

// console.log(!(s == 10))

/// ternary operators

// (condition)? true : false ;

// console.log(hggg)
// var s = "-0" 
var r  // undefined

// (s == 20) ? r = "correct" : r = "wrong"

// console.log(r);
//  (s) ? console.log("correct") : console.log("wrong");

// console.log(r)

// var fName = prompt("enter your name")
// console.log(fName)



// var n = prompt('enter number')
// n = parseInt(n)
// console.log(parseInt(n))
// let n2 = parseInt(n)
// var n2 = parseFloat(n)
// console.log(n2)
// console.log(typeof n) // string

// var n2 = Number(n)
// var n2 = +n
// console.log(n2)




// if condition

// if(condition) {true value ...}
// else {false value ..}

// var p = prompt('enter Your Job')

// if (p == 'eng') {
//     var result = "engineer"
//     console.log(result)
// }
// else if(p == 'doctor') {
//     var result = 'doctor'
//     console.log(doctor)    

// }
// else console.log('invalid Job')



// if(typeof p == 'string') console.log('string')


// var degree = prompt()
// d> 90  A
// d > 80 B
// d > 70 < 80 C
// d > 60 < 70 D

// d < 60 ==> F




//// switch ==> strict equality ===

// switch(variable){
//     case condition : 
//     code ...
//     case condition : 
//     code ...
//     case condition : 
//     code ...
//     case condition : 
//     code ...
//     default: code ...
// }


// var p = prompt('enter job')

// var p = true

// switch (p) {
//     case true :
//         var prop = prompt('enter name ')
//         console.log(prop)
//         console.log('boolean type')
//         break
//     case "30" :
//         console.log('number')
//         break
//     case "eng":
//     case 'engineer':    
//         console.log('eng')
//         break
//     case "doc":
//         console.log('doc')
//         break
//     case "instructor":
//         console.log('instructor')
//         break

//     default : console.log('invalid Job')    
// }


//////////////////////////// For Looping

// for(variable ; condition ; increment/decrement){
//     code ...
// }


for(var i = 1 ; i <= 10 ; i++){
    if(i == 9) break
    else if(i == 4) continue
    else console.log(i)
}






















