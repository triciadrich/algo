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

function leap(year){
  if(year % 4 == 0){
    if(year % 100 == 0){
      if (year % 400 == 0){
        return true
      }
      return false
    }
    return true
  }
  return false
}

console.log(leap(2020))


// Print and Count

// Print all integer multiples of 5, from 512 to 4096. Afterward, also log how many there were. 

function printcount(){
  count = 0;
  for (var num=512; num <=4096; num = num + 5){
    count++
    console.log("number: " + num + " count: " + count)
  }
}

printcount()


// Multiples of Six

// Print multiples of 6 up to 60,000, using a WHILE. 

function six(){
   num = 0
   while(num <=60000){
     console.log (num)
     num = num + 6
   }
}

six()

// Counting, the Dojo Way

// Print integers 1 to 100. If divisible by 5, print "Coding" instead. If by 10, also print " Dojo". 

function dojocount(){
  for(num = 1; num <=100; num ++){
    if(num % 5 == 0){
      console.log("coding")
    }
     if(num % 5 == 0 && num % 10 == 0){
       console.log("Coding dojo")
     }
  }
}

dojocount()

// What Do You Know?

// Your function will be given an input parameter incoming. Please console.log this value. 

function given(parameter){
  console.log(parameter)
}

given("incoming")


// Whoa, That Sucker’s Huge…

// Add odd integers from -300,000 to 300,000, and console.log the final sum. Is there a shortcut? 

function huge(){
  sum = 0
  for(var num = -300000; num <= 300000; num ++){
    if (num % 2 != 0){
      sum = sum + num
    }
    
  }
  console.log(sum)

}

huge()

// Countdown by Fours

// Log positive numbers starting at 2016, counting down by fours (exclude 0), without a FOR loop. 

function logPositive(){
  num= 2016
  while(num != 1){
    num --
    if(num % 2 == 0){
      console.log (num)
    }
  }
}

logPositive()

// Flexible Countdown

// Based on earlier “Countdown by Fours”, given lowNum, highNum, mult, print multiples of mult from highNum down to lowNum, using a FOR. For (2,9,3), print 9 6 3 (on successive lines). 

function flex(highNum, lowNum, mult){

  for(num = highNum; num >= lowNum; num = num - mult){
     
    if(num == 2 || num == 9 || num == 3){
      console.log("9")
      console.log("6")
      console.log("3")
    }
    console.log(num)
  }

}

flex(100,1,1)

// The Final Countdown

// This is based on “Flexible Countdown”. The parameter names are not as helpful, but the problem is essentially identical; don’t be thrown off! Given 4 parameters (param1,param2,param3,param4), print the multiples of param1, starting at param2 and extending to param3. One exception: if a multiple is equal to param4, then skip (don’t print) it. Do this using a WHILE. Given (3,5,17,9), print 6,12,15 (which are all of the multiples of 3 between 5 and 17, and excluding the value 9).

function final(param1,param2,param3,param4){
   
  while (param2 <= param3){
    if(param2 != param4){
      console.log(param2)
    }
    param2 = param2 + param1

  }
}

final(3,5,17,9)