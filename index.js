function isPalindrome(word) {
  // Write your algorithm here
  const arrayOfString = word.split("")
    for(let position = 0; position <=word.length;position++){
      if(arrayOfString[position]!==arrayOfString[word.length - position-1]){
        console.log(arrayOfString[position])
        return false
      }
    }
  return true
}

/* 
  Add your pseudocode here
  isPalindrome(stringOfWord){
    const arrayOfString = stringOfWord.split() 
    for(let position =0; position<= stringOfWord.length; ++position){
      iterate over string forward with position
      if(arrayOfString[position]!==(arrayOfString){
        return a false value
      }
    }
    return true value
  }

  call isPalindrome function with given string as input 
*/

/*
  Add written explanation of your solution here
  write a function with an argument of word - a string that will be passed to see if its a palindrome
  the block inside the function : 
    a variable will hold the split up the string into an array of individual characters
    a for statement will be run to iterate over the individual characters of the string both forward and backwards
    if, at anypoint, the characters do not match, going backwards and forward, return a false value
    else, return a true value once the if statement runs
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  //Own test cases
  console.log("Expecting: false");
  console.log("=>", isPalindrome("annenne"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("deified"))
}

module.exports = isPalindrome;
