// Prints help message to the console
// Returns a string
function alternatingSums(a) {
    let result = [0, 0];
    for (let i in a)
        result[i % 2] += a[i];
    return result.toString();
}
console.log("Tổng cân nặng mỗi team là: " + alternatingSums([60, 40, 55, 75, 64]));
