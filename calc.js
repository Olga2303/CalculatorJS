const textCalc = document.getElementById ('screen');

function insert(num) {
   textCalc.value = textCalc.value + num; 
}

function back() {
    let exp = textCalc.value;
    textCalc.value = exp.substring (0, exp.length - 1);
}

function clean() {
    textCalc.value = "";
}

function equal() {
    let exp = textCalc.value;
    if(exp) {
        textCalc.value = eval(exp);
    }
}
