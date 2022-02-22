// // 산술 연산자
// 5 * 4
// // 문자열 연결 연산자
// 'My name is ' + 'Lee'
// // 할당 연산자
// color = 'red'
// // 비교 연산자
// 3 > 5
// // 논리 연산자
// true && false
// // 타입 연산자
// typeof 'Hi'

// 5 + 2;  // 7
// 5 - 2;  // 3
// 5 * 2;  // 10
// 5 / 2;  // 2.5
// 5 % 2;  // 1


// var x = 5;
// var result;

// // 선할당 후 증가(postfix increment oprator)
// result = x++;  
// console.log(result, x);     // 5, 6

// // 선증가 후 할당(prefix increment oprator)
// result = ++x;  
// console.log(result, x);     // 7, 7

// // 선할당 후 감소(postfix decrement oprator)
// result = x--;  
// console.log(result, x);     // 7, 6

// // 선감소 후 할당(prefix decrement oprator)
// result = --x;  
// console.log(result, x);     // 5, 5


// var x = '1';
// // 문자열을 숫자 타입으로 타입 변환한다.
// console.log(+x);
// // 부수 효과는 없다. 
// console.log(x);

// x = true
// // 부울리언 값을 숫자로 타입 변환한다.
// console.log(+x);
// // 부수 효과는 없다. 
// console.log(x);


// // 부호를 반전한다.
// -(-10);     // 10

// // 문자열을 숫자로 타입 변환한다.
// -'10';      // -10


// // 문자열 연결 연산자
// '1' + 2;    // '12
// 1 + '2';    // '12'

// // 산술 연산자
// 1 + 2;      // 3

// // true는 1로 타입 변환된다.
// 1 + true;   // 2

// // false는 0으로 타입 변환된다.
// 1 + false;  // 1

// // null는 0으로 타입 변환된다.
// 1 + null;  // 1

// // undefined는 숫자로 타입 변환되지 않는다.
// +undefined      // NaN
// 1 + undefined;  // NaN



// -0 === +0;              // true
// Object.is(-0, +0);      // false

// NaN === NaN;            // false
// Objec.is(NaN, NaN)      // true



// // 동등 비교
// 5 == 5;         // true

// // 타입은 다르지만 암묵적 타입 변환을 통해 타입을 일치시키면 동등하다.
// 5 == '5';       // true

// // 다음과 같은 동등 비교들은 결과를 예측하기 어렵다.
// '0' == '';          // false
// 0 == '';            // true
// 0 == '0'            // true
// false == 'false';   // false
// false == '0';       // true
// false == null;      // false
// false == undefined; // false


// // 일치비교
// 5 === 5;         // true

// // 암묵적 타입 변환을 하지 않고 값을 비교한다.
// 5 === '5';       // false

// // NaN은 자신과 일치하지 않는 유일한 값이다.
// NaN === NaN;     // false

// // Number.isNaN 함수는 지정한 값이 NaN인지 확인하고 그 결과를 부울리언 값으로 반환한다.
// Number.isNaN(NaN);               // true
// Number.isNaN(10);                // false
// Number.isNaN(1 + undefined);     // true 


// // 조건식 score >= 60 이 참(일치 비교)이면 'pass'반환
// // 조건식 score >= 60 이 거짓(일치 비교)이면 'fail'반환
// var result = score >=60 ? 'pass' : 'fail'; 

// // 암묵적 타입 변환
// !0;              // true
// !'Hello';        // false


// // 논리합(||) 연산자
// true || true;   // true
// true || false;  // true
// false || true;  // true
// false || false; // false

// // 논리곱(&&) 연산자
// true && true;   // true
// true && false;  // false
// false && true;  // false
// false && false; // false



// typeof ''               // "string"
// typeof 1                // "number"
// typeof NaN              // "number"
// typeof true             // "boolean"
// typeof undefined        // "undefined"
// typeof Symbol()         // "symbol"
// typeof null             // "object"
// typeof []               // "object"
// typeof {}               // "object"
// typeof new Date()       // "object"
// typeof /test/gi         // "object"
// typeof function(){}     // "function"



// // 블록문
// {
//     var foo = 10;
// }

// // 제어문
// var x = 1;
// if (x < 10) {
//     x++;
// }

// // 함수 선언문
// function sum(a, b) {
//     return a + b;
// }



// var num = 2;
// var kind;

// // if 문
// if(num > 0) {
//     kind = '양수';      // 음수를 구별할 수 없다.
// }
// console.log(kind);      // 양수

// // if...else 문
// if(num > 0) {
//     kind = '양수';    
// }
// else {
//     kind = '음수';      // 0은 음수가 아니다.
// }
// console.log(kind);      // 양수


// // if...else if 문
// if(num > 0) {
//     kind = '양수';    
// }
// else if(num < 0){
//     kind = '음수';      // 0은 음수가 아니다.
// }
// else {
//     kind = '영';
// }
// console.log(kind);      // 양수


// 월을 영어로 변환한다. (11 -> 'November')
var month = 2;
var monthName;

switch(month) {
    case 1: monthNAme = 'January';
        break;
    case 2: monthNAme = 'February';
        break;
    case 3: monthNAme = 'March';
        break;
    case 4: monthNAme = 'April';
        break;
    case 5: monthNAme = 'May';
        break;  
    case 6: monthNAme = 'June';
        break;  
    case 7: monthNAme = 'July';
        break;  
    case 8: monthNAme = 'August';
        break;  
    case 9: monthNAme = 'September';
        break;  
    case 10: monthNAme = 'October';
        break;  
    case 11: monthNAme = 'November';
        break;  
    case 12: monthNAme = 'December';
        break;  
    default: monthName = "Invalid month"
}
console.log(monthName);     // Invaild month