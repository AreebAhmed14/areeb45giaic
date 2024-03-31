"use strict";
function sandwich(items) {
    console.log('making your sandwich with:');
    for (let i = 0; i < items.length; i++) {
        console.log(items[i]);
    }
}
sandwich(['cheese', 'jelly']);
sandwich(['peanuts', 'bacon']);
