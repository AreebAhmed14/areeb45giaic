console.log("comparision of equlity with string", "Apple"==="Apple");
console.log("comparision of inequlity with string", ("apple" as string)==="orange");


console.log("comparision od lowercase", "AREEB".toLowerCase()=="areeb");
console.log("comparision od lowercase", "AREEB".toLowerCase()=="Areeb");

console.log("numeric equality test:", 29==29);
console.log("numeric inequality test:", (29 as number)==30);

console.log("numeric greater than test:", 10>5);
console.log("numeric less than test:", 10<5);

console.log("greater than or equal to test:", 55>=56);
console.log("less than or equal to test:", 55<=56);

console.log("OR test",22==22 || (33 as number)!=66 );
console.log("AND test",22==22 && (33 as number)==66 );

let check =["areeb", "ali", "bilal", "much more"];
console.log("is areeb store in array", check.includes("areeb"));
console.log("is shah store in array", check.includes("shah"));
