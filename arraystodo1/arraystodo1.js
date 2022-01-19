  // Arrays To Do 1


// Push Front

// Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.
function pushFront(arr,value){
  

  for(var i = arr.length -1; i >= 0; i--){
    arr[i + 1] = arr[i]
    
  }
  arr[0]= value
  return arr
  
}
console.log(pushFront([1,2,3,4,5], 10))

// Pop Front

// Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop().
function popFront(arr){
  val = arr[0]
  arr.pop(0)
  return val;
}

console.log(popFront([1,2,3,4]))
// Insert At

// Given an array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).
function insertAt(arr,index,val){
  for (var i = arr.length - 1; i >= index; i--){
    arr[i + 1] = arr[i]
  }
  arr[index] = val
  return arr
}

console.log(insertAt([10,9,8,7,6], 2, 11))

// Remove At (Bonus Challenge)

// Given an array and an index into array, remove and return the array value at that index. Do this without using built-in array methods except pop(). Think of popFront(arr) as equivalent to removeAt(arr,0).
  function removeAt(arr,index){
    value = arr[index]
    for(let i = index; i <= arr.length; i++){
      if (i == index ){
        for(let i = index; i<=arr.length -1; i++){
          arr[i] = arr[i+1]
        }
        arr.pop()
      }
    }
    console.log(arr)
    return value
    

  }

  console.log(removeAt([10,9,8,7,6], 3))
// Swap Pairs (Bonus Challenge)

// Swap positions of successive pairs of values of given array. If length is odd, do not change the final element. For [1,2,3,4], return [2,1,4,3]. For example, change input ["Brendan",true,42] to [true,"Brendan",42]. As with all array challenges, do this without using any built-in array methods.


// Remove Duplicates (Bonus Challenge)

// Sara is looking to hire an awesome web developer and has received applications from various sources. Her assistant alphabetized them but noticed some duplicates. Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together. As with all these array challenges, do this without using any built-in array methods.

// Second: Solve this without using any nested loops.


