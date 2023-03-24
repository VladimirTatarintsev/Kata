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

// 7. You are going to be given a word. Your job is to return the middle character of the word. 
// If the word's length is odd, return the middle character. 
// If the word's length is even, return the middle 2 characters.
function getMiddle(s) {
  if (s.length % 2 !== 0) {
		return s.charAt(Math.floor(s.length / 2))
  } else return s.charAt(s.length / 2 - 1) + s.charAt(s.length / 2)
}

// 8. Given a list of integers, determine whether the sum of its elements is odd or even.
function oddOrEven(array) {
	const sum = array.reduce((acc, val) => acc + val, 0);
	return sum % 2 === 0 ? "even" : "odd"
}

// 9. Дана строка, если символы в строке уникальны заменить на "(", если повторяются заменить на ")"
function duplicateEncode(word){
	let result = ""
	word = word.toLowerCase().split("");
	for (let i = 0; i < word.length; i++) {
		if (word.indexOf(word[i]) === word.lastIndexOf(word[i])) {
			result += "("
		} else result += ")"
	}
	return result
}

// 10. Проверить является ли переданная строка изограмой.
function isIsogram(str){
	let uniqe = "";
  	let isogram = new Map();
	for (let i = 0; i < str.length; i++) {
	  if (!isogram.has(str[i].toLowerCase())) {
		  isogram.set(str[i].toLowerCase(), i);
			uniqe += str[i].toLowerCase()
		  }
	}
	return uniqe === str.toLowerCase()
 }

 // 11. Character with longest consecutive repetition
 function longestRepetition(s) {
	const obj = {};
	let result = {
		name: "",
		count: 0
	};
	for (let i = 0; i < s.length; i++) {
		if (i === 0) {
			obj.name = s[i],
			obj.count = 1
			result = {...obj}
		} else if (s[i] === s[i - 1]) {
			obj.count += 1
			if (obj.count > result.count) {
				result = {...obj}
			}
		} else if (s[i] !== s[i - 1]) {
			obj.name = s[i];
			obj.count = 1;
		} 
	}
	return [result.name, result.count];
 }

 // 12. Card Game Alice and Bob are playing a game. The aim of the game is to collect the most cards. The rules:
// if the number of cards is even, the players can either take half of the cards from the stack, or only 1 card -- as they choose;
// if the number of cards is odd, the players must take 1 card.
// Alice starts the game.
// Return the maximum number of cards Alice can collect, if Bob plays optimally (tries to get as many cards as possible for himself).

function cardGame(n){
	let cards = BigInt(n)
	let Alice = 0n;
	let Bob = 0n;
	if (cards % 2n === 0n) {
		while(cards) {
			if (cards % 2n === 0n) {
				if ((cards / 2n) % 2n === 0n && cards / 2n !== 2n) {
					Alice += 1n;
					cards = cards - 1n;
				} else {
					Alice += cards / 2n
					cards = cards / 2n
				}
			} else {
				Alice += 1n;
				cards = cards - 1n;
			}
			if (cards % 2n === 0n) {
				Bob += cards / 2n
				cards = cards / 2n 
			} else {
				Bob += 1n;
				cards = cards - 1n;
			}
		}
	} else {
		while(cards > 0) {
			if (cards % 2n === 0n) {
				Alice += cards / 2n
				cards = cards / 2n 
			} else {
				Alice += 1n;
				cards = cards - 1n;
			}
			if (cards % 2n === 0n) {
				if ((cards / 2n) % 2n === 0n && cards / 2n !== 2n) {
					Bob += 1n;
					cards = cards - 1n;
				} else {
					Bob += cards / 2n
					cards = cards / 2n
				}
			} else {
				Bob += 1n;
				cards = cards - 1n;
			}
		}
	}
	return Alice;
 }

// 13. The Hashtag Generator
// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result or any word is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
 function generateHashtag (str) {
	let arr = str.split(" ");
	if (str === "" || str[0] === " ") {
	  return false
	} else if (arr.some((el) => el.length >= 140)) {
		return false
	} 
	return "#" + str.split(" ").map((substr) => substr !== "" ? substr[0].toUpperCase() + substr.slice(1) : '').join("")
 }
