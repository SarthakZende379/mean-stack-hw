// Q1: Reverse a number
function reverseNumber(n) {
  const reversed = parseInt(Math.abs(n).toString().split("").reverse().join(""));
  return n < 0 ? -reversed : reversed;
}
console.log("Q1:", reverseNumber(32243)); // 34223

// Q2: Check if a string is a palindrome
function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleaned === cleaned.split("").reverse().join("");
}
console.log("Q2:", isPalindrome("madam"));      // true
console.log("Q2:", isPalindrome("nurses run")); // true
console.log("Q2:", isPalindrome("hello"));      // false

// Q3: Generate all combinations of a string
function stringCombinations(str) {
  const result = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      result.push(str.slice(i, j));
    }
  }
  return result.join(", ");
}
console.log("Q3:", stringCombinations("dog")); // d, do, dog, o, og, g

// Q4: Return a string with letters in alphabetical order
function alphabeticalOrder(str) {
  return str.split("").sort().join("");
}
console.log("Q4:", alphabeticalOrder("webmaster")); // abeemrstw

// Q5: Capitalize the first letter of each word
function titleCase(str) {
  return str
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
console.log("Q5:", titleCase("the quick brown fox")); // The Quick Brown Fox

// Q6: Find the longest word in a string
function longestWord(str) {
  return str.split(" ").reduce((longest, word) =>
    word.length > longest.length ? word : longest, "");
}
console.log("Q6:", longestWord("Web Development Tutorial")); // Development

// Q7: Count vowels in a string
function countVowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}
console.log("Q7:", countVowels("The quick brown fox")); // 5

// Q8: Check if a number is prime
function isPrime(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}
console.log("Q8:", isPrime(7));  // true
console.log("Q8:", isPrime(10)); // false

// Q9: Return the type of an argument
function getType(arg) {
  return typeof arg;
}
console.log("Q9:", getType(42));        // number
console.log("Q9:", getType("hello"));   // string
console.log("Q9:", getType(true));      // boolean
console.log("Q9:", getType(undefined)); // undefined
console.log("Q9:", getType({}));        // object
console.log("Q9:", getType(() => {}));  // function

// Q10: Generate an n x n identity matrix
function identityMatrix(n) {
  return Array.from({ length: n }, (_, i) =>
    Array.from({ length: n }, (_, j) => (i === j ? 1 : 0))
  );
}
console.log("Q10:", identityMatrix(3));
// [[1,0,0],[0,1,0],[0,0,1]]

// Q11: Find the second lowest and second greatest numbers in an array
function secondLowestAndGreatest(arr) {
  const sorted = [...new Set(arr)].sort((a, b) => a - b);
  return [sorted[1], sorted[sorted.length - 2]];
}
console.log("Q11:", secondLowestAndGreatest([1, 2, 3, 4, 5])); // [2, 4]

// Q12: Check if a number is perfect
function isPerfect(n) {
  if (n <= 1) return false;
  let sum = 1;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      sum += i;
      if (i !== n / i) sum += n / i;
    }
  }
  return sum === n;
}
console.log("Q12:", isPerfect(6));   // true
console.log("Q12:", isPerfect(28));  // true
console.log("Q12:", isPerfect(10));  // false

// Q13: Compute the factors of a positive integer
function getFactors(n) {
  const factors = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) factors.push(i);
  }
  return factors;
}
console.log("Q13:", getFactors(12)); // [1, 2, 3, 4, 6, 12]

// Q14: Convert an amount to coins
function amountToCoins(amount, coins) {
  const result = [];
  for (const coin of coins) {
    while (amount >= coin) {
      result.push(coin);
      amount -= coin;
    }
  }
  return result.join(", ");
}
console.log("Q14:", amountToCoins(46, [25, 10, 5, 2, 1])); // 25, 10, 10, 1

// Q15: Compute b^n (base to the power of exponent)
function power(b, n) {
  if (n === 0) return 1;
  if (n < 0) return 1 / power(b, -n);
  return b * power(b, n - 1);
}
console.log("Q15:", power(2, 10)); // 1024
console.log("Q15:", power(3, 4));  // 81

// Q16: Extract unique characters from a string (preserve order)
function uniqueChars(str) {
  return str.split("").filter((char, index, arr) => arr.indexOf(char) === index).join("");
}
console.log("Q16:", uniqueChars("thequickbrownfoxjumpsoverthelazydog")); // thequickbrownfxjmpsvlazydg

// Q17: Get the number of occurrences of each letter in a string
function letterCount(str) {
  return str.split("").reduce((acc, char) => {
    if (char !== " ") acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});
}
console.log("Q17:", letterCount("hello world"));

// Q18: Binary search on a sorted array
function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
}
console.log("Q18:", binarySearch([1, 3, 5, 7, 9, 11], 7));  // 3
console.log("Q18:", binarySearch([1, 3, 5, 7, 9, 11], 6));  // -1

// Q19: Return array elements larger than a given number
function elementsLargerThan(arr, num) {
  return arr.filter(el => el > num);
}
console.log("Q19:", elementsLargerThan([1, 5, 3, 8, 2, 7], 4)); // [5, 8, 7]

// Q20: Generate a random string ID of specified length
function generateId(length) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
}
console.log("Q20:", generateId(8)); // e.g. "aB3xKm9Z"

// Q21: Get all subsets of fixed length from an array
function fixedLengthSubsets(arr, len) {
  const result = [];
  function combine(start, current) {
    if (current.length === len) {
      result.push([...current]);
      return;
    }
    for (let i = start; i < arr.length; i++) {
      current.push(arr[i]);
      combine(i + 1, current);
      current.pop();
    }
  }
  combine(0, []);
  return result.map(sub => sub.reverse());
}
console.log("Q21:", fixedLengthSubsets([1, 2, 3], 2)); // [[2,1],[3,1],[3,2]]

// Q22: Count occurrences of a letter in a string
function countOccurrences(str, letter) {
  return str.split("").filter(ch => ch === letter).length;
}
console.log("Q22:", countOccurrences("microsoft.com", "o")); // 3

// Q23: Find the first non-repeated character in a string
function firstNonRepeated(str) {
  for (const char of str) {
    if (str.indexOf(char) === str.lastIndexOf(char)) return char;
  }
  return null;
}
console.log("Q23:", firstNonRepeated("abacddbec")); // e

// Q24: Bubble Sort algorithm
function bubbleSort(arr) {
  const a = [...arr];
  for (let i = 0; i < a.length - 1; i++) {
    for (let j = 0; j < a.length - 1 - i; j++) {
      if (a[j] > a[j + 1]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
      }
    }
  }
  return a;
}
console.log("Q24:", bubbleSort([64, 34, 25, 12, 22, 11, 90])); // [11, 12, 22, 25, 34, 64, 90]
