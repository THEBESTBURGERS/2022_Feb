// outer 라는 식별자가 붙은 레이블 for 문

// outer: for(var i = 0; i < 3; i++){
//   for(var j = 0; j < 3; j++) {
//     // i + j === 3이면 outer라는 식별자가 붙은 레이블 for 문을 탈출한다.
//     if(i+j === 3) break outer;
//     console.log(`inner [${i}, ${j}]`);
//   }
// }

// console.log('Done!');


// console.log("abab".indexOf('ab'));


// var string = 'Hello world';
// var search = 'l';
// var count = 0;

// // 문자열은 유사 배열이므로 for 문으로 순회할 수 있다.
// for(var i = 0; i < string.length; i++){
//   // 'l' 이 아니면 현 지점에서 실행을 중단하고 반복문의 증감식으로 이동한다.
//   if(string[i] !== search) continue;
//   count++;
// }
// console.log(count); // 3

// // 참고로 String.prototype.match 메서드를 사용해도 같은 동작을 한다.
// const regexp = new RegExp(search, 'g');
// console.log(string.match(regexp).length);  // 3



// // 숫자 타입
// 0 + ''              // "0"
// -0 + ''             // "0"
// 1+ ''               // "1"
// -1 + ''             // "-1"
// NaN + ''            // "NaN"
// Infinity + ''       // "Infinity"
// -Infinity + ''      // "-Infinity"

// // 부울리언 타입
// true + ''           // "true"
// false + ''          // "false"

// // null 타입
// null + ''           // "null"

// // undefined 타입
// undefined + ''      // "undefined"

// // 심벌 타입
// (Symbol()) + ''     // "TypeError"

// // 객체 타입
// ({}) + ''           // "[object Object]"
// Math + ''           // "[object Math]"
// [] + ''             // ""
// [10, 20] + ''       // "10, 20"
// (function(){}) + '' // "function()"
// Array + ''          // "function Array() { [native code]}"




// // 숫자 타입
// +''               // 0
// +'0'              // 0
// +'1'              // 1 
// +'string'         //  NaN

// // 부울리언 타입
// +true             //  1
// +false            //  0

// // null 타입
// +null             //  0

// // undefined 타입
// +undefined        //  NaN

// // 심벌 타입
// +Symbol()         //  TypeError

// // 객체 타입
// +{}               //  NaN
// +[]               //  0
// +[10, 20]         //  NaN
// +(function(){})   //  NaN




// 1. String 생성자 함수를 new 연산자 없이 호출하는 방법
// 숫자 타입 => 문자열 타입
String(1);              // "1"
String(NaN);            // "NaN"
String(Infinity);       // "Infinity"
// 부울리언 타입 => 문자열 타입
String(true)            // "true"
String(false)           // "false"



// 숫자 타입 => 문자열 타입
1 + ''                  // "1"
NaN + ''                //  "NaN"
Infinity + ''           // "Infinity"

// 부울리언 타입 => 문자열 타입
true + ''               // "true"
false + ''              // "false"

