// Problem 1: Three ways to sum to n

/*
Provide 3 unique implementations of the following function.

Input: `n` - any integer 
Assuming this input will always produce a result lesser than `Number.MAX_SAFE_INTEGER`.
Output: `return` - summation to `n`, i.e. `sum_to_n(5) === 1 + 2 + 3 + 4 + 5 === 15`.
*/

var sum_to_n_a = function (n) {
	// Naive solution: for loop
	// O(n), O(1)
	let count = 0;
	for (let i = 1; i <= n; i++) {
		count += i;
	}
	return count;
};

var sum_to_n_b = function (n) {
	// Maths way: it's like 1-100, 50(51)/2
	// O(1), O(1)
	return (n * (n + 1)) / 2;
};

var sum_to_n_c = function (n) {
	// Javascript way with reduce
	// Create an array
	let array = Array.from({ length: n }, (_, i) => i + 1);
	sum = array.reduce((acc, cur) => acc + cur);
	return sum;
};

console.log(sum_to_n_c(5));
