"use strict";
function identity(city, country = "world but I dont know country name...") {
    console.log(`${city} is in ${country}`);
}
identity('karachi', 'pakistan');
identity('dehli', 'india');
identity('paris');
