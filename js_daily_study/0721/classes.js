// ES6 Classes

/* ------------------------------------------------ */

// ES6 방식
// function User(first, last){
//     this.firstName = first
//     this.lastName = last
// }
// User.prototype.getFullName = function () {
// return `${this.firstName} ${this.lastName}`
// }

/* ------------------------------------------------ */

// class 방식
class User {
    constructor(first, last) { // 받아오는 매개변수
        this.firstName = first
        this.lastName = last 
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}
const junkue = new User(`준규`, `박`)
const jason = new User(`Jason`, `Mraz`)

console.log(junkue)
console.log(jason)

console.log(junkue.getFullName())
console.log(jason.getFullName())