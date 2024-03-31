"use strict";
let age = 70;
if (age < 2) {
    console.log("person is a baby");
}
else if (age >= 2 && age < 4) {
    console.log("person is toddler");
}
else if (age >= 4 && age < 13) {
    console.log("person is a kid");
}
else if (age >= 13 && age < 20) {
    console.log("person is  a teenager");
}
else if (age >= 20 && age < 40) {
    console.log("person is young");
}
else if (age >= 40 && age < 70) {
    console.log("person is adult");
}
else {
    console.log("person will die soon");
}
