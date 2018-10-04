//# chellenge
//braces and intruder challenges
elements = [2, 7, 6, 8, 7, 2, 10, 10]
Array.prototype.diff = (a) => {
    return this.filter((i) => a.indexOf(i) < 0);
};
function findIntruder (elements) {
    const element = elements
    .filter((v, i, a) =>  a.indexOf(v) === i)
    .diff( elements.filter((v, i, a) =>  a.indexOf(v) !== i));
    return element.length > 0 ? element[0] : -1
}
findIntruder(elements)

function validBraces(braces){
    var arr = [];
    var bracesTypes = {
        ']' : '[',
        '}' : '{',
        ')' : '('
    };

    for (var i = 0; i < braces.length; ++i){
        if (braces[i] === '[' || braces[i] === '(' || braces[i] === '{'){
          arr.push(braces[i]);
        }
        else if (arr[arr.length-1] === bracesTypes[braces[i]]){
          arr.pop();
        }
        else{
          return false;
        }
    }

    return arr.length === 0;

}
