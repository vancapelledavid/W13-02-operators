const age= 19;
const isFemale= true;
const driverStatus= '';
const name= ''
const totalAmount= 34


// test constanten:
// const age= 15;
// const isFemale= false;
// const driverStatus= '';


if(age>17){
    console.log("Ok, je bent 18 of ouder, je mag naar binnen");
} else{
    console.log("Niet oud genoeg. Ga weg.")
}

if(isFemale){
    console.log("Hallo vrouw, je mag naar binnen.")
} else{
    console.log ("Je bent geen vrouw, ga weg")
}

if(driverStatus === 'bob'){
    console.log ("Dag  bob, je mag rijden.")
} else{
    console.log("Je bent geen bob en mag niet rijden.")
}

if(age>=18 && age<=25){
    console.log("Je krijgt 50% korting!")
} else{
    console.log( "Je betaalt de volle mep!")
}

if(name==='Bram' || name==='Sarah'){
    console.log("Gefeliciteerd! Je krijgt gratis bier!")
} 

if(totalAmount > 25 && totalAmount <= 50){
    console.log("Je krijgt gratis bitterballen")
} else if(totalAmount > 50 && totalAmount <= 100){
    console.log("Yes. Gratis bitterballen en gratis nachos!")
}else if(totalAmount > 100){
    console.log("Hoera! Gratis champagne, bitterballen en nacho's")
}



