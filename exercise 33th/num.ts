let list = [1,2,3,4,5,6,7,8,9];
for(let num of list){
    let assign = "";
    if(num===1){
        assign = 'st';
    }
    else if(num===2){
        assign = 'nd';
    }
    else if(num===3){
        assign = 'rd';
    }
    else{
        assign = 'th';
    }
    console.log(`${num}${assign}`);
}