class User {
    constructor(first, last) {
        this.firstName = first
        this.lastName = last
    }
    get fullName() { // Getter : 값을 얻어내는 용도
        console.log('Getting full name!')
        return `${this.firstName} ${this.lastName}`
    }
    set fullName(value) {
        console.log(value)
        ;[this.firstName, this.lastName] = value.split(' ')
        // 배열 구조분의 할당 
    }
}

const junkue = new User('Junkue123', 'Park')

console.log(junkue.fullName)

junkue.firstName = 'Jason'

console.log(junkue.fullName)

junkue.fullName = 'Anderson Kim' 
console.log(junkue)

console.log(junkue.fullName)
