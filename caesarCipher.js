const caesarCipher = (str, num) => {
    let lowerCaseString = str.toLowerCase()
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let newString = ''
    for (i = 0; i < lowerCaseString.length; i++) {
        let currentLetter = lowerCaseString[i]
        if (currentLetter === ' ') {
            newString += currentLetter
            continue
        }
        let currentIndex = alphabet.indexOf(currentLetter)
        let newIndex = currentIndex + num
        if (newIndex > 25) newIndex = newIndex - 26
        if (newIndex < 0) newIndex = 26 + newIndex
        newString += alphabet[newIndex]
    }
}

caesarCipher('juno', 5)