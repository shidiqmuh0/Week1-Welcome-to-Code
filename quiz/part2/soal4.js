// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!


let word4 = 'wow JavaScript is so cool';
let exampleFirstWord4 = word4.substring(0, 3);
let firstWordLength = exampleFirstWord4.length;

let secondWord = word4.substring(4,14);
let secondWordLenght = secondWord.length;

let thirdWord = word4.substring(15,17);
let thirdWordLenght = thirdWord.length; 

let fourthWord = word4.substring(18,29);
let fourthWordLenght = fourthWord.length;

let fifthWord = word4.substring(21,25);
let fifthWordLenght = fifthWord.length;

console.log('First Word: ' + exampleFirstWord4 + ', with length: ' + firstWordLength);
console.log('Second Word: ' + secondWord + ', with length: ' + secondWordLenght);
console.log('Third Word: ' + thirdWord + ', with length: ' + thirdWordLenght);
console.log('Fourth Word: ' + fourthWord + ', with length: ' + fourthWordLenght);
console.log('Fifth Word: ' + fifthWord + ', with length: ' + fifthWordLenght);