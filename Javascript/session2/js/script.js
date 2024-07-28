

function sumNumbers(){
    var num1 = 10
    var num2 = 20
    var sum = num1 + num2
    // //console.log(sum)
    return sum
}


var sum = sumNumbers()

//console.log(sum)

// var p = prompt('enter name')


// var firstName = 'Nouran'
// var lastName = 'Fayez'

// function getFullName(fName , lName){
//     return `${fName} ${lName}`
// }

// var fullName = getFullName('Nouran' , 'Fayez')
// var fullName2 = getFullName(firstName , lastName)


// var promptFirstName = prompt('Enter First Name')
// var promptLastName = prompt('Enter Last Name')

// //console.log(getFullName(promptFirstName , promptLastName))

// //console.log(fullName)
// //console.log(fullName2)


// function getNumbers(num1 , num2 , num3 = 10){
//     //console.log(num3)
//     var sum = num1 + num2 + num3
//     //console.log(sum)
// }

// getNumbers(20 , 30 )


// function looping(startNum){
//     for (var i = startNum; i < 10; i++) {
//         //console.log(i)
        
//     }
// }

// looping(0)
// //console.log("------------------")
// looping(3)




// looping(startNum , endNum , breakNum , continueNum)

// looping(0 , 10 , 5 )
// looping(0 , 10 , 5 )
// looping(0 , 10 , 5 )
// looping(0 , 10 , 5 )



// function statment 
// function getNumbers(){
//     return 100
// }
// var nums = getNumbers()

/// function Experission

var nums = function numbs(){
    return "javascript"
}

//console.log(nums())

// Arrow Function 

var sum1 = ()=>{
    var a = 10 
    var b = 20 
    var sum = a + b
   return sum 
}
var sum2 = ()=> 10000 
var sum3 = (num)=> num+10


// //console.log(sum())
//console.log(sum3(30))


// Array 
var fName = "Nouran"
var fName = "Ahmed"
var isGraduated = true
var age = 30

 var userInfo = ['Nouran' , "ahmed" , 30 , true]

//  //console.log(userInfo)
 var age = userInfo[2]

//  //console.log(userInfo[2])

 userInfo[4] = "Egyptian"
 userInfo[userInfo.length] = "FrontEnd Developer"
//  userInfo[8] = "Egyptian"
// //console.log(userInfo)

// Array Methods 

var numsArray = [1,false ,4 ,7 ,30]

numsArray.push( 20 , "Html" , true) // add item/s at the end of array

numsArray.unshift("css" , 40 , true) /// add item/s at the start of array

// //console.log(numsArray)

var courses = ['html' , 'css' , "bootstrap" , "js"]

// courses.pop()
// courses.pop()
courses.shift()

var mixedArray = [1, 5, 'html' , 'css' , false , true , ['arr1' , 'arr2']]

// //console.log(mixedArray[1])
mixedArray[1] = 10000

mixedArray[6][0] = "Javascript"

// splice(index , deletedCount , item/s)

// mixedArray.splice(3 , 2) // delete item/s

mixedArray.splice(6 , 0 , ['Html' , 'css'] , 'Angular' ) // add item/s
// //console.log(mixedArray)

// //console.log(mixedArray.includes('css'))
// //console.log(mixedArray.includes('gjgjftgdgfd'))


var numbersArray = [2, 6, 1, 10]

var LettersNumbers = [3,  'box' , 1 , 'apple']

// //console.log(numbersArray.sort())
// //console.log(numbersArray.reverse())


// //console.log(LettersNumbers.sort())


// //console.log(LettersNumbers[0])
// //console.log(LettersNumbers[1])
// //console.log(LettersNumbers[2])
// //console.log(LettersNumbers[3])

var LettersNumbers = [3,  'box' , 1 , 'apple']
// for (var i = 0; i < LettersNumbers.length; i++) {
//     //console.log(LettersNumbers[i])
// }

LettersNumbers.forEach((element , index , array)=>{
//   console.log(index)
//   console.log("-----------------------")
//   console.log(index)
//   console.log(array)
// if(element == 'box') console.log(element)
})

///////////////////////////////////////

var numbers = [ 2, 5, 7, 'html' , 10]

numbers.forEach((ele)=>{
    if(ele > 2) console.log(ele) 
})



function findNums(num){
    if(num > 2)
        return num
}



// var n = numbers.find(findNums)

var n = numbers.find((item)=> item > 2 )

var n2 = numbers.findIndex(ele=> ele == 'bootstrap') 

var nArray = numbers.filter(item => item > 2) // return new array


console.log(n)
console.log(n2)
console.log(nArray)


// ()=>{
//     return 'JS'
// }
// ()=> 'js'





