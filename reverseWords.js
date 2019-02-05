const reverseWords = (string) => {
  const wordsArray = string.split(' ')
  const reversedWordArray = []

  wordsArray.forEach(word => {
    let reversedWord = ''
    for ( let i = word.length -1; i >= 0 ; i--){
      reversedWord += word[i]
    }
    reversedWordArray.push(reversedWord)
  })
  return reversedWordArray.join(' ')
  }
   
console.log( reverseWords("this is a string of words"));
