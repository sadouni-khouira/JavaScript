function test1() {
    let str = document.getElementById("theText").value;
    let tested = str.charAt(0);
    console.log(tested);
    if (tested == "a" || tested == "b" || tested == "c" || tested == "d") {
        console.log("nice");
    } else {
        console.log("not nice");
    }
}

function test2() {
    let str = document.getElementById("theText").value;
    let tested = str.includes("@");
    console.log(tested);
}

function test3() {
    let str = document.getElementById("theText").value;
    let i = 0;
    while (i < 10) {
        tested = str.includes(i);
        i++;
        if (tested == true) {
            console.log(tested);
            i = 10;
        } else if (i == 9 && tested == false) {
            console.log("false")
        }
    }
}

function test4() {
    let str = document.getElementById("theText").value;
    let newstr;
    for (let i = 0; i < str.length; i++) {
        if (isNaN(str[i])) {
            newstr = newstr + str[i];
            console.log("isnan");
        } else {
            newstr = newstr + "*";
            console.log("isan");
        }
    }
    console.log(newstr);
}

function test5() {
    let maj = ['A', 'B', 'C', 'D'];
    let min = ['a', 'b', 'c', 'd'];
    let a = document.getElementById("theText").value;
    // let b = document.getElementById("theText").value.charAt();

    if (a.substr(0, 1).toUpperCase() == a.substr(0, 1)) {
        console.log('la chaine commence par une majuscule');
    } else if (a.substr(0, 1).toLowerCase() == a.substr(0, 1)) {
        console.log('la chaine commence par une minuscule');
    } else if (isNaN(b) == false) {
        console.log('ni minuscule ni majuscule !')
    }