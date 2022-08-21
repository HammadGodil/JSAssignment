// Reversing a number
function reverse_a_number(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
alert(Number(reverse_a_number(32243)));


// Checking a Palindrome or not? 
function check_Palindrome(str_entry){
	   var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
		var ccount = 0;
		if(cstr==="") {
			alert("Nothing found!");
			return false;
		}
		if ((cstr.length) % 2 === 0) {
			ccount = (cstr.length) / 2;
		} else {
			if (cstr.length === 1) {
				alert("Entry is a palindrome.");
				return true;
			} else {
				ccount = (cstr.length - 1) / 2;
			}
		}
		for (var x = 0; x < ccount; x++) {
			if (cstr[x] != cstr.slice(-1-x)[0]) {
				alert("Entry is not a palindrome.");
				return false;
			}
		}
		alert("The entry is a palindrome.");
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
  alert(combi.join("\n"));
}

substrings("dog");

// Checking alphabetical order
function alphabet_order(str)
  {
return str.split('').sort().join('');
  }
alert(alphabet_order("webmaster"));

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
alert(uppercase("the quick brown fox"));

// Finding longest word in the string
function find_longest_word(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
alert(find_longest_word('Web Development Tutorial'));

// Counting Vowel in the string
function vowel_count(str1)
{
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;
  
  for(var x = 0; x < str1.length ; x++)
  {
    if (vowel_list.indexOf(str1[x]) !== -1)
    {
      vcount += 1;
    }
  
  }
  return vcount;
}
alert(vowel_count("The quick brown fox"));

// checking a number is prime or not
function test_prime(n)
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

alert(test_prime(37));

// accepting argument & returning type
function detect_data_type(value)
{
var dtypes = [Function, RegExp, Number, String, Boolean, Object], x, len;
    
if (typeof value === "object" || typeof value === "function") 
    {
     for (x = 0, len = dtypes.length; x < len; x++) 
     {
            if (value instanceof dtypes[x])
            {
                return dtypes[x];
            }
      }
    }
    
    return typeof value;
}
alert(detect_data_type(12));
alert(detect_data_type('w3resource'));
alert(detect_data_type(false));

// finding lowerst & second greatest numbers
function Second_Greatest_Lowest(arr_num)
{
  arr_num.sort(function(x,y)
           {
           return x-y;
           });
  var uniqa = [arr_num[0]];
  var result = [];
  
  for(var j=1; j < arr_num.length; j++)
  {
    if(arr_num[j-1] !== arr_num[j])
    {
      uniqa.push(arr_num[j]);
    }
  }
    result.push(uniqa[1],uniqa[uniqa.length-2]);
  return result.join(',');
  }

alert(Second_Greatest_Lowest([1,2,3,4,5]));

