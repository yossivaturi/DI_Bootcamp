// Using the .toString() method convert the array to a string.
// Using the .join()method convert the array to a string. Try passing different values into the join.
// Eg .join(“+”), .join(” “), .join(“”)
const numbers2 = [5,0,9,1,7,4,2,6,3,8];
let stringArr = numbers2.toString();
console.log(stringArr);
let stringArr2 = numbers2.join(",");
console.log(stringArr2);


//  Bubble Sort
const numbers = [5,0,9,1,7,4,2,6,3,8];
for(let i = 0; i < numbers.length; i++){
    let hasChanged = false;
    for(let j = 0; j < numbers.length; j++ ) {
        if(numbers[j] < numbers[j+1]) {
            let temp = numbers[j];
            numbers[j] = numbers[j+1];
            numbers[j+1] = temp;
            hasChanged = true;
        }
    }
    if (!hasChanged){
        break;
    }
}
console.log(numbers);