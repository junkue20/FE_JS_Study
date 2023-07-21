//  프로토타입

// const fruits = ['사과', '바나나', '체리']  // 배열 리터럴 (기호를 사용)

// const fruits = new Array('사과', '바나나', '체리')

// console.log(fruits)
// console.log(fruits.length)
// console.log(fruits.includes('수박'))

// // new Array() 생성자 함수를 통해 생성한 배열 데이터는 length, includes 라는 속성을 사용할 수 있음.
// // 이러한 속성들을 '프로토타입 속성' or '프로토타입 메소드' 라고 이야기함.


// Array.prototype.junkue = function () {
//     console.log(this)
// }
// // Array 객체에서 프로토타입으로 junkue라는 메소드를 등록함.

// fruits.junkue() // fruits에서 해당 메소드를 실행 


// const arr = []
// arr.junkue()


// /*----------------------------------------------------------*/

//  const user = {
//     firstName: 'Jungyu',
//     lastName: 'Park',
//     getFullName: function () {
//         return `${this.firstName} ${this.lastName}`
//     }
//  }

//  const user2 = {
//     firstName: 'Jason',
//     lastName: 'Mraz',
//  }


//  console.log(user.getFullName())
//  console.log(user.getFullName.call(user2))  // user2 라는 객체 데이터가 user 객체데이터의 getFullName 메소드를 빌려서 호출됨.
// 중복을 최대한으로 줄여줌!
// 하지만, 데이터의 종류가 많은 상황일때 번거로움이 증가함. (항상 call과 메소드 객체명을 사용해야 함)

/*----------------------------------------------------------*/
// 동일한 동작의 프로토타입
// getFullName 과 같은 메소드의 사용특성상 편의성을 추구하고자 프로토타입을 사용

function User(first, last) { // 파스칼케이스. 첫글자를 대분자로 시작해야 함. (파스칼케이스 찾아보기)
    this.firstName = first
    this.lastName = last
}
User.prototype.getFullName = function () {  // this의 정의가 달라질 수 있기에 일반함수로 작성되어야 함!
    return `${this.firstName} ${this.lastName}`
} // User 생성자 함수에 프로토타입 형태로 getFullName 메소드가 등록됨.

const example = new User('Jungyu', 'Park')  // new와 함께 생성하는 것은 생성자 함수
const example2 = new User('Jason', 'Mraz') 
console.log(example)
console.log(example2)

// 메소드명만 가져와서 점표기법으로 사용 가능. 
console.log(example.getFullName())
console.log(example2.getFullName())