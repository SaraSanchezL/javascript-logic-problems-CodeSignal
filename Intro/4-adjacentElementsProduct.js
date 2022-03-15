/* Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

Example

For inputArray = [3, 6, -2, -5, 7, 3], the output should be
solution(inputArray) = 21.

7 and 3 produce the largest product. */ 

function solution(inputArray) {
  return Math.max(...inputArray.slice(0, -1).map((n, i) => n * inputArray[i + 1]))
}
