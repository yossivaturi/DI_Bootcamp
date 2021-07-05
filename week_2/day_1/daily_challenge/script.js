let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
alert(fruits);
console.log(fruits);
// 1.Remove Banana from the array.
const index = fruits.indexOf("Banana");
// the first argument is the index that we want to start removing from
// The second argument of splice is the number of elements to remove.
// Note that splice modifies the array in place 
// and returns a new array containing the elements that have been removed.
fruits.splice(index, 1);
alert(fruits);
console.log(fruits);

// 2.Sort the array in alphabetical order.
fruits.sort();
alert(fruits);
console.log(fruits);

// 3.Add “Kiwi” to the end of the array.
fruits.push("Kiwi");
alert(fruits);
console.log(fruits);

// 4.Remove “Apples” from the array. Don’t use the same method as in part 1.
// shift delets the first elemnt of the Array
fruits.shift();
alert(fruits);
console.log(fruits);

// 5.Sort the array in reverse order. 
// (Not alphabetical, but reverse the current Array 
// i.e. [‘a’, ‘c’, ‘b’] becomes [‘b’, ‘c’, ‘a’])
// At the end you should see this outcome:
fruits.reverse();
alert(fruits);
console.log(fruits);


let moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(moreFruits[1][1][0]);

