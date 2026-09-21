const numbers = [4, 8, 15, 16, 23, 42];
summ = 0
maxx = -1;
arr = [];
j = 0
//Через цикл
for(var i = 0; i < 6; i++) {
    summ += numbers[i];
    if (numbers[i] > maxx) {
        maxx = numbers[i];
    }
    if(numbers[i] > 10) {
        arr[j] = numbers[i];
        j++;
    }
}
console.log("Сумма: " + summ);
console.log("Максимальный элемент: " + maxx);
console.log("Новый массив " + arr);

//Через методы массивов
var sum = numbers.reduce((acc, n) => acc + n, 0);
var max = Math.max(...numbers);
var ar = numbers.filter(n => n > 10);
console.log("Сумма: " + sum);
console.log("Максимальный элемент: " + max);
console.log("Новый массив " + ar);