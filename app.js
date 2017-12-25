//printReverse(). reverse the array

var numbers = [1, 2, 3, 4, 5];

function printReverse(arr) {
  for (i = arr.length; i >= 0; i--) {
    console.log(arr[i]);
  }
}

printReverse(numbers);

//isUniform(). return true if all same

var other = [1, 1, 1, 1];

function isUniform(arr) {
  var first = arr[0];
  for (i = 1; i < arr.length; i++) {
    if (arr[i] !== first) {
      return false;
    }
  }
  return true;
}

//sumArray(). add em all up
