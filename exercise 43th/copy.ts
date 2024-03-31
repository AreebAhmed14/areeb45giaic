let magicians = ['Aru','jiya','aqsu','libra'];

function copyArray(arr:string[]){
    return [...arr]
}

function great_magician(modified_array:string[]){
    for(let i=0; i<modified_array.length; i++){
        console.log('The great magician ' + modified_array[i])
}
}

function show_magician(array_magician:string[]){
    for(let i=0; i<array_magician.length; i++){
        console.log(array_magician[i])
    }
}

let copyOfTheArray = copyArray(magicians)

console.log('\n modified copy array \n')

great_magician(copyOfTheArray);

console.log('\norignal array\n')

show_magician(magicians)