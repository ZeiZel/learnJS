// function log(a, b, ...rest) {
//     console.log(a, b, rest);
// }
// log("Some string", "Another String", "No mae", 4, 5, 34,456, 4);


function calcOrDouble(a, b) {
    a = a || 2;
    b = b || 2;
    console.log(a * b);
}
calcOrDouble();