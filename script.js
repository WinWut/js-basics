const isEcInRange = (ec) => ec >= 1200 && ec <= 2000;

const classifyTemp = (temp) => {
  if (temp < 18) return "Too cold";
  if (temp > 35) return "Too hot";
  return "OK";
};

const sumTo = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};

const findMax = (numbers) => {
  let max = numbers[0];
  for (const num of numbers) {
    if (num > max) {
      max = num;
    }
  }
  return max;
};

const fizzBuzz = (n) => {
  if (n % 3 === 0 && n % 5 === 0) return "FizzBuzz";
  if (n % 3 === 0) return "Fizz";
  if (n % 5 === 0) return "Buzz";
  return n;
};

const avg = (numbers) => {
  let total = 0;
  for (const num of numbers) {
    total += num;
  }
  return total / numbers.length;
};

const isAllInRange = (values, min, max) => {
  for (const v of values) {
    if (v < min || v > max) return false;
  }
  return true;
};

// tests: silent means pass
console.assert(isEcInRange(1200) === true, "1200");
console.assert(isEcInRange(2000) === true, "2000");
console.assert(isEcInRange(1199) === false, "1199");
console.assert(isEcInRange(2001) === false, "2001");
console.assert(classifyTemp(17) === "Too cold", "17");
console.assert(classifyTemp(18) === "OK", "18");
console.assert(classifyTemp(35) === "OK", "35");
console.assert(classifyTemp(36) === "Too hot", "36");
console.assert(sumTo(100) === 5050, "sumTo 100");
console.assert(sumTo(0) === 0, "sumTo 0");
console.assert(findMax([22, 28, 36, 41, 30]) === 41, "max");
console.assert(findMax([-5, -2, -9]) === -2, "max negatives");
console.assert(findMax([5]) === 5, "max single");
console.assert(avg([22, 28, 36, 41, 30]) === 31.4, "avg");
console.assert(isAllInRange([1300, 1500], 1200, 2000) === true, "all in");
console.assert(isAllInRange([1300, 2100], 1200, 2000) === false, "one out");
console.log("Tests finished");