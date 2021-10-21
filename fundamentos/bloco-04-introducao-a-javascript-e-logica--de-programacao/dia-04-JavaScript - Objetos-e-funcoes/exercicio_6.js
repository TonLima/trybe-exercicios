function verificaPalindrome(string) {
  for (index in string) {
    if (string[index] != string[string.length - 1 - index]) {
      return false;
    }
  }
  return true;
}

/*let reverse = string.split("").reverse().join("");

  if (reverse === string) {
    return true;
  } else {
    return false;
  }
}*/

console.log(verificaPalindrome("arara"));
console.log(verificaPalindrome("desenvolvimento"));
