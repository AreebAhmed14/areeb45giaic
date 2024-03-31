let guest = ['areeb', 'adeel', 'anas', 'huzaifa'];

for(let i=0; i<guest.length; i++){
  console.log('hello Mr.'+ guest[i] + '\nyou are invited in our dinner party. we will inform you soon about date and time.\nplease join us in this party and make it memoriable.\nthankyou!\n');
}

let absent = 'anas';
let new_guest  = 'ali';

console.log(`Mr.${absent} is not coming in party so we invite another guest.\n`);

console.log('new invitations\n');

guest[2] = new_guest;

for(let i=0; i<guest.length; i++){
    console.log('hello Mr.'+ guest[i] + '\nyou are invited in our dinner party. we will inform you soon about date and time.\nplease join us in this party and make it memoriable.\nthankyou!\n');
  }

  console.log('Good news! we arrange big dinner table so we can invite 3 more guest\n');

  guest.unshift('bilal');
  guest.splice(2 , 0 , 'haris');
  guest.push('waqas');

  for(let i=0; i<guest.length; i++){
    console.log('hello Mr.'+ guest[i] + '\nyou are invited in our dinner party. we will inform you soon about date and time.\nplease join us in this party and make it memoriable.\nthankyou!\n');
  }

  console.log(`the total number of guest are: ${guest.length}`);
