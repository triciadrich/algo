//  Setting and Swapping

 // Set myNumber to 42. Set myName to your name. Now swap myNumber into myName & vice versa. 
function setswap(){
 var myNumber = 42;
 var myname = "tricia"

myNumber = "tricia"
myname = 42

 console.log("myname " + myname)
 console.log("myNumber " + myNumber)
}

setswap()

//Print -52 to 1066

//Print integers from -52 to 1066 using a FOR loop.

function printfiftytwo(){
  for (var num =-52; num <= 1066; num= num +1){
    console.log("Number: " + num)
  }
}

printfiftytwo()

//Don’t Worry, Be Happy

//Create beCheerful(). Within it, console.log string "good morning!" Call it 98 times.

function beCheerful(){
  for (var num = 1; num <=98; num = num +1){
    console.log(num + " Good Morning!")
  }
}

beCheerful()

//Multiples of Three – but Not All

//Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6.

function threes(){
  for (var num = -300; num <= 0; num = num +3){
    if (num != -3 && num != -6){
      console.log("Number: " + num)
    }
  }
}

threes()

//Printing Integers with While

//Print integers from 2000 to 5280, using a WHILE. 

function whileloop(){
  var num = 2000

  while (num <= 5280){
    console.log("Number " + num)
    num = num + 1
  }

}

whileloop()
  

//You Say It’s Your Birthday

//If 2 given numbers represent your birth month and day in either order, log "How did you know?", else log "Just another day...."

function birthday(num1, num2){
    if (num1 == 5 || num1 == 2 && num2 == 5 || num2 == 2){
      console.log("how did you know?")
    }
    else{
      console.log("Just another day....")
    }
  

}

birthday(2,3)
birthday(5,2)

//Leap Year

//Write a function that determines whether a given year is a leap year. If a year is divisible by four, it is a leap year, unless it is divisible by 100. However, if it is divisible by 400, then it is.