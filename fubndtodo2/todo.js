// Fundamentals To Do 2


// Countdown

// Create a function that accepts a number as an input. Return a new array that counts down by one, from the number (as array’s ‘zeroth’ element) down to 0 (as the last element). How long is this array?
function countDown(num1){
  var arr = []
  for (var num = num1; num >= 0; num = num -1){
    arr.push(num)
    
  }
  console.log(arr.length)
}

countDown(9)
 
// Print and Return

// Your function will receive an array with two numbers. Print the first value, and return the second.

function printReturn(num1,num2){

  arr = []
  arr.push(num1)
  arr.push(num2)
  console.log(arr[0])
  return arr[1]

}
printReturn(2,3)
// First Plus Length

// Given an array, return the sum of the first value in the array, plus the array’s length. What happens if the array’s first value is not a number, but a string (like "what?") or a boolean (like false).
function array(arr){

  sum = arr[0] + arr.length
  return sum;
}

console.log(array(["hello",2,3,4]))
 
// Values Greater than Second

// For [1,3,5,7,9,13], print values that are greater than its 2nd value. Return how many values this is.
function greaterThanSecond(arr){
  sec = arr[1]
  values = 0
  for (i = 0; i < arr.length; i++){
    if (arr[i] > sec){
      console.log(arr[i])
      values ++
    }
    
  }
  
  return values;
}

console.log(greaterThanSecond([1,3,5,7,9,13]))
// Values Greater than Second, Generalized

// Write a function that accepts any array, and returns a new array with the array values that are greater than its 2nd value. Print how many values this is. What will you do if the array is only one element long?
function greaterThanSecondGeneral(arr){
  sec= arr[1]
  values = 0
  newArr = []
  for (i=0; i< arr.length; i++){
    if (arr[i] > sec){
      newArr.push(arr[i])
      values ++
    }
  }
  console.log(values)
  return newArr;
}
 
console.log(greaterThanSecondGeneral([1]))
 
// This Length, That Value

// Given two numbers, return array of length num1 with each value num2. Print "Jinx!" if they are same.
function lengthValue(num1,num2){
  array = []
  if(num1 == num2){
    console.log("jinx")
  }
  for(i = 0; i < num1; i ++){
    array.push(num2)
  }
return array;
}

console.log(lengthValue(4,4))

// Fit the First Value

// Your function should accept an array. If value at [0] is greater than array’s length, print "Too big!"; if value at [0] is less than array’s length, print "Too small!"; otherwise print "Just right!".
function fitTheFirst(arr){
  if(arr[0] > arr.length){
    console.log("Too Big!")
  }
  if(arr[0] < arr.length){
    console.log("Too small!")
  }
  else{
    console.log("just right!")
  }
}

fitTheFirst([1])

 
// Fahrenheit to Celsius

// Kelvin wants to convert between temperature scales. Create fahrenheitToCelsius(fDegrees) that accepts a number of degrees in Fahrenheit and returns the equivalent temperature as expressed in Celsius degrees. For review, Fahrenheit = (9/5 * Celsius) + 32.


// Celsius to Fahrenheit

// Create celsiusToFahrenheit(cDegrees) that accepts number of degrees Celsius, and returns the equivalent temperature expressed in Fahrenheit degrees.

// (Optional): Do Fahrenheit and Celsius values equate at a certain number? The scientific calculation can be complex, so for this challenge just try a series of Celsius integer values starting at 200, going downward (descending), checking whether it is equal to the corresponding Fahrenheit value. 