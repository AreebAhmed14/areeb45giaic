"use strict";
// import { features } from "process"
function carFunctions(manufacture, model, ...extraoptions) {
    let carobj = Object.assign({ manufacture: manufacture, model: model }, Object.assign({}, ...extraoptions));
    return carobj;
}
let answer = carFunctions("suzuki", "cultus", { color: "gray" }, { feature: ['navigation', 'power window'] }, { seats: ["altra comfort", "five in quantity",] });
console.log(answer);
