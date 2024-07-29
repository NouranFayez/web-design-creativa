

// var userInfo = ['Tamer' , 'Ahmed' , 35 , true]

var firstName = "Mazen"

var userInfo = {
    firstName: 'Zain',
    lastName: 'Ahmed',
    isGraduated: false,
    age: 10,
    fullName: function () {
        return `${this.firstName} ${userInfo.lastName}`
    },
    addressList: function () {
        return {
            address1: 'Nasr city',
            address2: 'October',
        }
    }
    // fullName2 : ()=>{
    //     return `${this.firstName} ${userInfo.lastName}`
    // },

}



//console.log(userInfo.firstName)
userInfo.lastName = 'Tamer'

userInfo.address = "Nasr city"
//console.log(userInfo)
//console.log(userInfo.fullName())
// //console.log(userInfo.fullName2())

//console.log(userInfo.addressList().address2)


var info = (user) => {
    //console.log(user)
    //console.log(user.firstName)
    //console.log(user.addressList().address1)
}

info(userInfo)


var users = [
    {
        fName: 'Nouran',
        lName: 'Fayez'
    },
    {
        fName: 'Tamer',
        lName: 'Fayez'
    },
    {
        fName: 'Zain',
        lName: 'Fayez'
    }
]


users.forEach((item , index , array)=>{
    // //console.log(item)
    // //console.log(item.fName)
    
})

// //console.table(users)

// var p = +prompt('Number Of Users')
// //console.log(p)

var usersArray = []
function addUser(){
    var user = {
        name : prompt('Enetr UserName'),
        balance : prompt('Enetr UserBalance'),
        id : prompt('Enetr UserID'),
    }
    usersArray.push(user)
    //console.table(usersArray)
}

// for(var i  = 1 ; i <= p ; i++){
//     // addUser()
// }



// var let const 

var v1 = "variable"
// console.log(v1)

var v1 = 20
// console.log(v1)

v1 = true
// console.log(v1)

let l1 = "let"
// let l1 = 20
const c1 = "const"
// const c1 = 20


// console.log(c1)

function getName (){
    var v3 = 'string'

    let l3 = "let"

    if(true){
        console.log(l3)
        let let4 = "let inside if"
        var var5 = "var inside if"
        
    }
    // console.log(let4)
    console.log(var5)
    console.log(v3) // string
}

// console.log(var5)


// function getName2(){
//     var v3 = 30
//     console.log(v3) // number
// }

getName()

// console.log(v3)


let d = new Date()
console.log(d)

console.log(d.getFullYear())
console.log(d.getMonth())
console.log(d.getHours())
console.log(d.getSeconds())
console.log(d.getMinutes())
console.log(d.getDate())
console.log(d.getDay())

var mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var mS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

// console.log(mS[d.getMonth()])

let str = "      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, dolor?       "

console.log(str[0])
console.log(str)
console.log(str.trim())

let str2 = "Lorem ipsum dolor sit Lorem amet consectetur"

// String Methods
console.log(str2.startsWith('Lorem222'))
console.log(str2.endsWith('consectetur'))
console.log(str2.replace('Lorem' , 'HTML'))
console.log(str2.replaceAll('Lorem' , 'HTML'))
console.log(str2.toUpperCase())
console.log(str2.toLowerCase())
console.log(str2.toLocaleUpperCase())
console.log(str2.slice(0 , 10))



// Numbers Methods 
console.log(Math.random())
let n = -4
console.log(Math.abs(n))
let n2 = 4.35555
console.log(Math.round(n2))
console.log(Math.floor(n2))
console.log(Math.ceil(n2))

console.log(Math.min(2, 7, 1, 9))
console.log(Math.max(2, 7, 1, 9))

let s = "3"
let n3 = 30

console.log(isNaN(s)) // Not A Number
console.log(isNaN(n3)) // Not A Number







