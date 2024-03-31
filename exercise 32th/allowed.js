"use strict";
let c_users = ['areeb', 'anas', 'huzaifa', 'adeel'];
let n_users = ['ali', 'bilal', 'anas', 'unain'];
n_users.forEach(check => {
    let lower = check.toLowerCase();
    if (c_users.map(c_users => c_users.toLowerCase()).includes(lower)) {
        console.log(`oops the name ${check} is already used. please enter another name and try agnain`);
    }
    else {
        console.log(`this name ${check} is availible... `);
    }
});
