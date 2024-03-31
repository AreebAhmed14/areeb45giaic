let personName = "Shajeeah bhatti";


let lowercase = personName.toLowerCase();
let UpperCase = personName.toUpperCase();
let TittleCase = personName.split(" ").map(word =>word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ")
 
console.log(lowercase)
console.log(UpperCase)
console.log(TittleCase)