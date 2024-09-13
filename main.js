const time = document.querySelector(".time")
console.log(time);
function currentTime(){
    let date = new Date()
    let hour = date.getHours().toString().padStart(2, "0")
    let minute = date.getMinutes().toString().padStart(2, "0")
    let second = date.getSeconds().toString().padStart(2, "0")
    time.innerHTML = `${hour}:${minute}:${second}`
}
currentTime()
setInterval (()=>{
    currentTime()
}, 1000)





// console.log("start");
// // 1-masala
// function getCount(str) {
//   const vowels = 'aeiou';
//   let count = 0;
//   for (let char of str) {
//     if (vowels.includes(char)) {
//       count++;
//     }
//   }
//   return count;
// }
// // 2-masala
// function disemvowel(str) {
//     return str.replace(/[aeiou]/gi, '');
//  }
// // 3-masala
// function highAndLow(numbers){
//   const numArray = numbers.split(' ').map(Number);
//   const max = Math.max(...numArray);
//   const min = Math.min(...numArray);
//   return `${max} ${min}`;
// }
// // 4-masala
// function filter_list(l) {
//     return l.filter(item => typeof item === 'number');
// }
// // 5-masala
// function descendingOrder(n){
//     return parseInt(n.toString()
//                   .split('')       
//                   .sort((a, b) => b - a)
//                   .join(''));  
// }
// // 6-masala
// var isSquare = function(n){
//     return Number.isInteger(Math.sqrt(n));
// }
// // 7-masala
// function getMiddle(s)
// {
//    const len = s.length;
//   const middle = Math.floor(len / 2);
//   if (len % 2 === 1) {
//     return s[middle];
//   } 
//   else {
//     return s[middle - 1] + s[middle];
//   }
// }
// // 8-masala
// function isIsogram(str){
//     const lowerStr = str.toLowerCase(); 
//    return new Set(lowerStr).size === lowerStr.length;
// }
// // 9-masala
// function XO(str) {
//     const lowerStr = str.toLowerCase();

// const countX = (lowerStr.match(/x/g) || []).length;
// const countO = (lowerStr.match(/o/g) || []).length;

// return countX === countO;
// }
// // 10-masala
// function squareDigits(num){
//     return Number(num.toString().split('').map(digit => Math.pow(digit, 2)).join(''));
//  }































console.log("end");

