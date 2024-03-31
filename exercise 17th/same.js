"use strict";
let guest = ['areeb', 'adeel', 'anas', 'huzaifa'];
console.log('Good news! we arrange big dinner table so we can invite 3 more guest\n');
guest.unshift('bilal');
guest.splice(2, 0, 'haris');
guest.push('waqas');
for (let i = 0; i < guest.length; i++) {
    console.log('hello Mr.' + guest[i] + '\nyou are invited in our dinner party. we will inform you soon about date and time.\nplease join us in this party and make it memoriable.\nthankyou!\n');
}
console.log('\nhello guests there is a big problem, we cant invited more than 2 guest in our party because we cancel big table order \n');
while (guest.length > 2) {
    let remove = guest.pop();
    console.log(`hello Mr.${remove} we are extreamly sorry because you are not invited in our party. we hope this our manner will not effect your emotions.`);
}
for (let i = 0; i < guest.length; i++) {
    console.log('\nhello Mr.' + guest[i] + '\nyou are still invited in our dinner party. we will inform you soon about date and time.\nplease join us in this party and make it memoriable.\nthankyou!\n');
}
guest.splice(0, 2);
console.log(guest);
