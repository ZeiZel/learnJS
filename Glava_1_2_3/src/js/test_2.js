console.log();



const person = {
    name: "Ajax",
    tel: "+79239188817",
    parents: {
        mom: "Mom",
        father: "Dad",
    },
}

console.log(JSON.stringify(person));
console.log(JSON.parse(JSON.stringify(person)));

const clone = JSON.parse(JSON.stringify(person));
clone.parents.mom = "Mother";
console.log(clone);
