// Reversing a number
function reverse_a_number(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
console.log(Number(reverse_a_number(32243)));


// Checking a Palindrome or not? 

function check_Palindrome(str_entry){
	// Change the string into lower case and remove  all non-alphanumeric characters
	   var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
		var ccount = 0;
	// Check whether the string is empty or not
		if(cstr==="") {
			console.log("Nothing found!");
			return false;
		}
	// Check if the length of the string is even or odd 
		if ((cstr.length) % 2 === 0) {
			ccount = (cstr.length) / 2;
		} else {
	// If the length of the string is 1 then it becomes a palindrome
			if (cstr.length === 1) {
				console.log("Entry is a palindrome.");
				return true;
			} else {
	// If the length of the string is odd ignore middle character
				ccount = (cstr.length - 1) / 2;
			}
		}
	// Loop through to check the first character to the last character and then move next
		for (var x = 0; x < ccount; x++) {
	// Compare characters and drop them if they do not match 
			if (cstr[x] != cstr.slice(-1-x)[0]) {
				console.log("Entry is not a palindrome.");
				return false;
			}
		}
		console.log("The entry is a palindrome.");
		return true;
	}
	check_Palindrome('madam');
	check_Palindrome('nurses run');
	check_Palindrome('fox');
	
// Generates all combinations of a string.
function substrings(str1)
{
var array1 = [];
  for (var x = 0, y=1; x < str1.length; x++,y++) 
  {
   array1[x]=str1.substring(x, y);
    }
var combi = [];
var temp= "";
var slent = Math.pow(2, array1.length);

for (var i = 0; i < slent ; i++)
{
    temp= "";
    for (var j=0;j<array1.length;j++) {
        if ((i & Math.pow(2,j))){ 
            temp += array1[j];
        }
    }
    if (temp !== "")
    {
        combi.push(temp);
    }
}
  console.log(combi.join("\n"));
}

substrings("dog");

// Checking alphabetical order
function alphabet_order(str)
  {
return str.split('').sort().join('');
  }
console.log(alphabet_order("webmaster"));

// Converting the first letter of each word of the string in upper case.
function uppercase(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
console.log(uppercase("the quick brown fox"));

