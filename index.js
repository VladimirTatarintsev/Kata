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

 // 14. sort emotions
function sortEmotions(arr, order = Boolean) {
	let emotions = [':D', ':)', ':|', ':(', 'T_T']
	if (order) {
		return arr.sort((a, b) => emotions.indexOf(a) - emotions.indexOf(b))
	}
	return arr.sort((a,b) => emotions.indexOf(b) - emotions.indexOf(a))
}

// 15. Pete, the baker.
// Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object)
// and returns the maximum number of cakes Pete can bake (integer).  
// Ingredients that are not present in the objects, can be considered as 0.
function cakes(recipe, available) {
	let cakesQuantyti = [];
	let counterRecipeIng = 0;
	for (let recipeIng in recipe) {
		counterRecipeIng++
		for (let availableIng in available) {
			if (recipeIng === availableIng) {
				cakesQuantyti.push(Math.floor(available[availableIng] / recipe[recipeIng]));
			}
		}
	}
	if (cakesQuantyti.length === counterRecipeIng) {
		return Math.min(...cakesQuantyti)
	}
	return 0
}

// 16. Подсчитать все встречающиеся символы в строке. Если у вас есть строка типа aba, результат должен быть {'a': 2, 'b': 1}.
function count(string) {
	let obj = {};
	for (let i = 0; i < string.length; i++) {
		const currentEl = string[i];
		if (!(currentEl in obj)) {
			obj[currentEl] = 1;
		} else {
			obj[currentEl] += 1;
		}
	}
	return obj
 }

 //17. Напишите алгоритм, который берет массив и перемещает все нули в конец, сохраняя порядок остальных элементов.
function moveZeros(arr) {
	let array = arr;
	let zeroArr = [];
	for (let i = 0; i < array.length; i++) {
		if (array[i] === 0) zeroArr.push(array[i])
	}
	return array.filter((el) => {
		return el !== 0
	}).concat(zeroArr)
}
// 18. Найти кол-во вхождений слов в строку, использовать метод split запрещено.
const getWordsCount = (str) => {
	const wordsArray = [];
	let substr = '';
	const wordsCount = {};
	for (let i = 0; i < str.length; i++) {
		const currentEl = str[i];
		if (currentEl !== ' ') {
			substr += str[i]
		} else {
			wordsArray.push(substr);
			substr = '';
		}
	}
	wordsArray.push(substr);
	
	for (let i = 0; i < wordsArray.length; i++) {
		const currentEl = wordsArray[i];
		currentEl in wordsCount ? wordsCount[currentEl] += 1 : wordsCount[currentEl] = 1
	}
	for (let key in wordsCount) {
		console.log(`${key} - ${wordsCount[key]}`)
	}
}
// С помощью регулярки
const getWordsCount2 = (str) => {
	let regExp = /([A-z]*\S)/gm;
	let word;
	let wordsArray = [];
	const wordsCount = {};
	while (word = regExp.exec(str)) {
		wordsArray.push(word[1]);
	}
	for (let i = 0; i < wordsArray.length; i++) {
		const currentEl = wordsArray[i];
		currentEl in wordsCount ? wordsCount[currentEl] += 1 : wordsCount[currentEl] = 1
	}
	console.log(wordsCount)
}
// 19. Найти наибольшее расстояние позиции между совпадающими значениями массива
const greatestDistance = function(data) {
	let result = 0;
	for (let i = 0; i < data.length; i++) {
		if (data.lastIndexOf(data[i]) - i > result) {
			result = data.lastIndexOf(data[i]) - i
		}
	}
	console.log(result)
	return result
};

//20. parseInt reloaded
function parseInt(str) {
	const words = {
		'zero': 0,
		'one': 1,
		'two': 2,
		'three': 3,
		'four': 4,
		'five': 5,
		'six': 6,
		'seven': 7,
		'eight': 8,
		'nine': 9,
		'ten': 10,
		'eleven': 11,
		'twelve': 12,
		'thirteen': 13,
		'fourteen': 14,
		'fifteen': 15,
		'sixteen': 16,
		'seventeen': 17,
		'eighteen': 18,
		'nineteen': 19,
		'twenty': 20,
		'thirty': 30,
		'forty': 40,
		'fifty': 50,
		'sixty': 60,
		'seventy': 70,
		'eighty': 80,
		'ninety': 90,
	};
	const multi = {
		'hundred': 100,
		'thousand': 1000,
		'million': 1000000
	};
 return str.split(/ |-/).reduce((value, word) => {
	if (words[word]) {
		value += words[word]
	}
	if (multi[word]) {
		value += multi[word] * (value % multi[word]) - (value % multi[word]);
	}
	return value
 },0)
}

//21. Pagination Helper
class PaginationHelper {
	constructor(collection, itemsPerPage) {
	this.collection = collection;
  	this.itemsPerPage = itemsPerPage;
	}
	itemCount() {
	  return this.collection.length
	}
	pageCount() {
	  return Math.ceil(this.collection.length / this.itemsPerPage)
	}
	pageItemCount(pageIndex) {
	// возвращает количество элементов на текущей странице. page_index отсчитывается от нуля.
	// этот метод должен возвращать -1 для значений pageIndex, выходящих за пределы допустимого диапазона.
    if (pageIndex < 0) {
		return -1
	}
	let count = 0;
	if (pageIndex === 0) {
		count = this.collection.slice(0, this.itemsPerPage).length
	} else if (pageIndex === 1) {
		count = this.collection.slice(this.itemsPerPage, this.itemsPerPage * (pageIndex + 1)).length
	} else {
		count = this.collection.slice(this.itemsPerPage * pageIndex, this.itemsPerPage * (pageIndex + 1)).length
	}
	return count <= 0 ? -1 : count
	}
	pageIndex(itemIndex) {
	// определяет, на какой странице находится элемент. Индексы с отсчетом от нуля
	// этот метод должен возвращать -1 для значений itemIndex, выходящих за пределы допустимого диапазона, а также если коллекция пуста.
	if (itemIndex >= this.collection.length || itemIndex < 0 || !this.collection.length) {
		return -1
	}
   return Math.floor(itemIndex / this.itemsPerPage) 
	}
}
var helper = new PaginationHelper([1,2,3,1], 5);

//22. Multiples of 3 or 5
function solution(number){
	let sum = 0;
	for (let i = 1; i < number; i++) {
		if (i % 3 === 0 || i % 5 === 0) {
			sum += i;
		} else if (i % 3 === 0 && i % 5 === 0) {
			sum += i;
		}
	}
	return sum
}
