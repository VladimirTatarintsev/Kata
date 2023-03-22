"use strict"

//1. Add Two Numbers Вам даны два непустых связанных списка, представляющих два неотрицательных целых числа. 
// Цифры хранятся в обратном порядке, и каждый из их узлов содержит одну цифру. 
// Сложите два числа и верните сумму в виде связанного списка.

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function(l1, l2) {
   function convertListNodeToArray (listNode) {
       let arr = [];
       if (listNode.next) {
           arr = arr.concat(
                convertListNodeToArray(listNode.next)
            );
       }
       arr.push(listNode.val)
       return arr
   }

   l1ToArray = convertListNodeToArray(l1);
   l2ToArray = convertListNodeToArray(l2);
   let sum = BigInt(l1ToArray.join('')) + BigInt(l2ToArray.join(''))
   let sumToArr = sum.toString().split('')
   let sumListNode = null;
   sumToArr.forEach((el) => {
       return sumListNode = {
           val: el,
           next: sumListNode
       }
       
   })
   return sumListNode
};

// 2. Two Sum. Вернуть индексы 2 чисел, которые в сумме равны target
const nums = [3,2,4];
const target = 6

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
	let output = [];
    for (let i = 0; i < nums.length; i++) {
		for (let j = (i + 1); j < nums.length; j++) {
			if (nums[i] + nums[j] === target) {
				output.push(i, j)
			}
		}
	 }
	 return output
};

// 3. Longest Substring Without Repeating Characters.
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
    const letters = s.split('');
	 let maxLength = 0;
	 const result = new Map();

	 for (let i = 0; i < letters.length; i++) {
		if (!result.has(letters[i])) {
			result.set(letters[i], i)
		} else {
			i = result.get(letters[i]);
			result.clear();
		}
		if (maxLength < result.size) {
			maxLength = result.size
		}
	 }
	 return maxLength
};
// 4. Проверить является ли число палиндромом
const isPalindrome = function(x) {
	return x == x.toString().split('').reverse().join('')
  };

// 5. Convert roman to integer
const romanToInt = function(s) {
	let numbers = {
		'I': 1,
		'V': 5,
		'X': 10,
		'L': 50,
		'C': 100,
		'D': 500,
		'M': 1000
	} 
	let accum = 0;
	for (let i = 0; i < s.length; i++) {
		if (s[i] === "I" && s[i + 1] === "V") {
			accum += 4;
			i++;
		 } else if (s[i] === "I" && s[i + 1] === "X") {
			accum += 9;
			i++;
		 } else if (s[i] === "X" && s[i + 1] === "L") {
			accum += 40;
			i++;
		 } else if (s[i] === "X" && s[i + 1] === "C") {
			accum += 90;
			i++;
		 } else if (s[i] === "C" && s[i + 1] === "D") {
			accum += 400;
			i++;
		 } else if (s[i] === "C" && s[i + 1] === "M") {
			accum += 900;
			i++;
		 } else {
		accum += numbers[s[i]]
		 }
	}
	return accum
 };

 // 6. Mumbling
 function accum(s) {
	let arr = s.split("");
  let returnedArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      returnedArr.push(arr[i].toUpperCase())
    } else {
      returnedArr.push(arr[i].toUpperCase() + arr[i].repeat(i).toLowerCase())
    }
  }
  return returnedArr.join("-")
}