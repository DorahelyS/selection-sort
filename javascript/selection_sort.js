function selectionSort(arr) {

  // starting for loop  - outer loop aka left pointer
  // starting at index 0 ; continue loop until it reaches second to last element of array ; then increment meaning move to next index
  // can do arr.length which would iterate i reaches the last element aka the length
  // but doing arr.length -1 because if technically the last number does not need to be sorted 
  // i = i + 1
  for (let i = 0; i < arr.length - 1; i++) {
    // keeping track of the value of index i - so if index i = 2 (will know the value at index 2)
    let minValue = arr[i]
    // keeping track of only index - NOT VALUE
    let indexOfMinValue = i

    // starting inner for loop - aka right pointer
    // starting at index i - needs to start at same spot / current position as outer loop ; continue loop until it reaches entire length of array, then increment meaning move to next index
    for (let j = i; j < arr.length; j++) {

      // if value of index j is less than the current minimum value (value at index i)
      if (arr[j] < minValue) {
        // then update minimum value to the value at index j 
        minValue = arr[j]
        // and alsp updated the index of the minimum value to j
        indexOfMinValue = j
      }
    }

    // this part is necessary because once the minValue is found it must be moved to the beginning of the unsorted portion of the arr
    // this ensures that the stored minValue is phycally moved to the right index where the current pointer is 
    // if I don't swap then the only thing that is happening is remembering that that number is the min
    //  Storing the value of the first element in a temporary variable
    let temp = arr[i]
    // replacing the value of the first element with the value of the second element
    arr[i] = arr[indexOfMinValue]
    // replacing the value of the second element with the value stored in the temporary variable
    arr[indexOfMinValue] = temp

  }

  return arr
}

if (require.main === module) {
  // add your own tests in here
  //console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2, 8, 4]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }
}

module.exports = selectionSort;


