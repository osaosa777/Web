function checkNumber(number) {
    console.log("Число является:")
    if (number > 0) {
        console.log("Положительным;");
    }
    else if (number < 0) {
        console.log("Отрицательным;");
    }
    else {
        console.log("Нулем;");
    }

    if(number % 2 == 0) {
        console.log("Четным;");
    }
    else{
        console.log("Нечетным;");
    }
}

var num = 0;
checkNumber(num);