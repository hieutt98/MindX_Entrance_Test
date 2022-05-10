// Prints help message to the console
// Returns a string
function adjacentElementsProduct(inputArray) {
    var res = 0;
    for (let i = 0; i < inputArray.length - 1; i++)
        if (inputArray[i] * inputArray[i + 1] > res)
            res = inputArray[i] * inputArray[i + 1];
    return res.toString();
}
console.log("Tích 2 số liền kề lớn nhất của mảng là: " + adjacentElementsProduct([2, 3, -5, -2, 4]));
