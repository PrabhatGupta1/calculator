var exp = '';
var optr = '';
var oprnds = [];
var result;

function typed(a) {
    var v = parseInt(a);
    if(v>=0 && v<=9) {
        
        exp = exp + a;

    } else if(a == '=') {

        exp = calExpression(exp).toString();
        
    } else if(a == '⌫') {
        exp = exp.slice(0,exp.length-1);
    }
    else {
        optrTyped(a);
        exp = exp + a;
    }
    document.getElementById("screen").value = exp;
}

function optrTyped(opterator) {
    optr = opterator;
}

function cleared() {
    exp = '';
}

for(var i=0;i<=18;i++) {
    document.querySelectorAll("button")[i].addEventListener("click",function() {
        var buttonInnerHTML = this.innerHTML;
        typed(buttonInnerHTML);
    });
}

document.addEventListener("keydown",function(e) {

    if((parseInt(e.key)>=0 && parseInt(e.key)<=9) || e.key == '+' || e.key == '-' || e.key == '*' || e.key == '/' || e.key == '.' || e.key == '%') {
        exp = exp + e.key;
    } else if(e.key == '=') {
        exp = calExpression(exp).toString();
    } else if(e.key == 'Backspace') {
        exp = exp.slice(0,exp.length-1);
    }  else if(e.key == 'c') {
        cleared();
    }
    document.getElementById("screen").value = exp;
});

function calExpression(exp) {
    
    if (exp.includes('+')) {
        oprnds = exp.split('+');
        result = parseFloat(oprnds[0])+parseFloat(oprnds[1]);
    } else if (exp.includes('-') && exp[0]!='-') {
        oprnds = exp.split('-'); 
        result = oprnds[0]-oprnds[1];
    } else if (exp.includes('*')) {
        oprnds = exp.split('*');
        result = parseFloat(oprnds[0])*parseFloat(oprnds[1] );
    } else if (exp.includes('/')) {
        oprnds = exp.split('/');
        result = oprnds[0]/oprnds[1];
    } else if (exp.includes('%')) {
        oprnds = exp.split('%');
        result = oprnds[0]%oprnds[1];
    }
    return result;
}

