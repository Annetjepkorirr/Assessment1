// Write a function that takes in a string and returns it when reversed
// let food = “eating”

let food="eating"
function eat(food){
    console.log(food.split('').reverse().join(''))
}
eat(food)

// Write a function that takes in the following array and consoles the target if it is found else
// null
// let num = [2,8,0,23,5,45,76]
// Target = 23

function binary(num,target){;
let left=0;
let right=num.length-1;

while(left<=right){
    let middle=Math.floor((left+right)/2)
    if (num[middle]===target) {
        return middle
    }
    else if
        (num[middle]>target){;
        right=middle-1
    }

    else{
        left=middle+1
    }
}
}
let num = [2,8,0,23,5,45,76]
let target = 23
console.log(binary(num,target))

// Given years between 2000 and 2023, console all the leap years in the following
// sentence, i.e “2020 is a leap year” if not console log i.e “2001 is not a leap year”

  for (let year=2000; year<=2023; year++) {
        if (year %4 === 0) {
                console.log(year+  " is even");
        }
        else {
                console.log(year + " is odd");
        }
}


// Given a range of numbers from 0 to 100, console”Fizz” if the numbers are divisible by 3,
// “Buzz” if the numbers are divisible by 5, and “FizzBuzz” if divisible by both 3 and 5.

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }

// Write a function that takes in an array of numbers and returns an array that has all
// elements multiplied by 4.
let numArray = [12,87,45,75,23,64,73];
function multiply(numArray){
    // numArray.forEach((element) =>console.log(element*4))
    
    // };
    // multiply(numArray)

    numArray.map(function(y){
        console.log(y*4)

})
}
 multiply(numArray)

// Write a func.tion that takes in an array of strings and returns an array with every element
// turned into a number
// let nums = [“10”,”24”,”45”,”56”,”67”] 
// // Create a numberArray and using
// // map function iterate over it
// // and push it by typecasting into
// // int using Number

let nums=["10","24","45","56","67"]
 let numsArray=nums.map(Number);
console.log(numsArray)

