// Reversing a number
// function reverse(num) {
// 	num = num.toString();
//  num = num.split("");
// 	return num.reverse().join("");
// }
// alert(Number(reverse(32243)));

// // Checking a Palindrome or not? 
// function check_Palindrome(str_entry) {
// 	   var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
// 		var ccount = 0;
// 		if(cstr==="") {
// 			alert("Nothing found!");
// 			return false;
// 		}
// 		if ((cstr.length) % 2 === 0) {
// 			ccount = (cstr.length) / 2;
// 		} else {
// 			if (cstr.length === 1) {
// 				alert("Entry is a palindrome.");
// 				return true;
// 			} else {
// 				ccount = (cstr.length - 1) / 2;
// 			}
// 		}
// 		for (var x = 0; x < ccount; x++) {
// 			if (cstr[x] != cstr.slice(-1-x)[0]) {
// 				alert("Entry is not a palindrome.");
// 				return false;
// 			}
// 		}
// 		alert("The entry is a palindrome.");
// 		return true;
// 	}
// 	check_Palindrome('madam');
// 	check_Palindrome('nurses run');
// 	check_Palindrome('fox');
	
// // Generates all combinations of a string.
// function substrings(str1)
// {
// var array1 = [];
//   for (var x = 0, y=1; x < str1.length; x++,y++) 
//   {
//    array1[x]=str1.substring(x, y);
//     }
// var combi = [];
// var temp= "";
// var slent = Math.pow(2, array1.length);

// for (var i = 0; i < slent ; i++)
// {
//     temp= "";
//     for (var j=0;j<array1.length;j++) {
//         if ((i & Math.pow(2,j))){ 
//             temp += array1[j];
//         }
//     }
//     if (temp !== "")
//     {
//         combi.push(temp);
//     }
// }
//   alert(combi.join("\n"));
// }

// substrings("dog");

// Checking alphabetical order
// function ordering(alpha) {
//   alpha = alpha.split('')
// return alpha.sort().join('');
// }
// alert(ordering("webmaster"));

// Converting the first letter of each word of the string in upper case.
// function uppercase(first) {
//   var split = first.split(' ');
//   var capitalized = [];
    
//   for(var x = 0; x < split.length; x++){
//     capitalized.push(split[x].charAt(0).toUpperCase()+split[x].slice(1));
//   }
//   return capitalized.join(' ');
// }
// alert(uppercase("the quick brown fox"));

// // Finding longest word in the string
// function find_longest_word(str) {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// alert(find_longest_word('Web Development Tutorial'));

// // Counting number of Vowels in the string
// function vowelCount(sentence) {
//   var vowels = 'aeiouAEIOU';
//   var vcount = 0;
//   for(var i = 0; i < sentence.length ; i++) {
//     if (vowels.indexOf(sentence[i]) !== -1) {
//       vcount += 1;
//     }
//   }
//   return vcount;
// }
// var numberOfVowel = vowelCount("The quick brown fox")
// alert(numberOfVowel);

// // checking a number is prime or not
// function prime(num) {
//   num = +prompt("Please input a number")
//   if (num === 1) {
//     return false;
//   } else if(num === 2) {
//     return true;
//   } else {
//     for(var i = 2; i < num; i++) {
//       if(num % i === 0) {
//         return false;
//       }
//     }
//     return true;  
//   }
// }
// alert(prime());

// // accepting argument & returning type
// function dataType(value) {
// var dtypes = [Function, RegExp, Number, String, Boolean, Object], x, len;
// if (typeof value === "object" || typeof value === "function") 
//     {
//      for (i = 0, len = dtypes.length; i < len; i++) 
//      {
//             if (value instanceof dtypes[i])
//             {
//                 return dtypes[i];
//             }
//       }
//     }
//     return typeof value;
// }
// alert(dataType(12));
// alert(dataType('w3resource'));
// alert(dataType(false));

// // finding lowest & second greatest numbers
// function Second_Greatest_Lowest(arr_num) {
//   arr_num.sort(function(x,y)
//            {
//            return x-y;
//            });
//   var uniqa = [arr_num[0]];
//   var result = [];
  
//   for(var j=1; j < arr_num.length; j++)
//   {
//     if(arr_num[j-1] !== arr_num[j])
//     {
//       uniqa.push(arr_num[j]);
//     }
//   }
//     result.push(uniqa[1],uniqa[uniqa.length-2]);
//   return result.join(',');
//   }
// alert(Second_Greatest_Lowest([1,2,3,4,5]));