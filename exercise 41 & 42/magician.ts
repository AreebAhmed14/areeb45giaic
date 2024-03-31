let magicians = ['Aru','jiya','aqsu','mina'];

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

console.log('\n2nd\n')

great_magician(magicians);

console.log('\n1st\n')

show_magician(magicians)