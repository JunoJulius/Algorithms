const harmlessRansomNote = (noteText, magazineText) => {
    let noteArr = noteText.split(' ')
    let magazineArr = magazineText.split(' ')
    let magazineObj = {}
    
    magazineArr.forEach(word => {
      if (!magazineObj[word]) magazineObj[word] = 0
      magazineObj[word]++
    });
    
    let noteIsPossible = true;
    noteArr.forEach(word => {
      if (magazineObj[word]) {
        magazineObj[word]--;
        if (magazineObj[word] < 0) noteIsPossible = false;
      }
      else noteIsPossible = false; 
    });
    
    return noteIsPossible;
  }
   
  harmlessRansomNote('this is a secret note for you from a secret admirer', 
  'puerto rico is a place of great wonder and excitement it has many secret waterfall locatoins that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited');





// function binarySearch(array, key){
//     var low = 0
//     var high = array.length - 1
//     var mid
//     var element

//     while (low <= high)
//     {
//         mid = Math.floor((low + high) / 2, 10)
//         element = array[mid]
//         if (element < key){
//             low = mid + 1 
//         }
//         else if ( element > key) {
//             high = mid - 1
//         }else {
//             return mid
//         }
//     }
// return -1
// }