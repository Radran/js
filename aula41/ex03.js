let fizzbuzz = (num) => {
    if(num % 3 == 0 && num % 5 == 0) {
       return 'fizzbuzz';
    }else if (num % 3 == 0) {
        return 'fizz';
    }else if (num % 5 == 0) {
        return 'buzz';
    } else if (num % 3 !== 0 && num % 5 !== 0) {
        return num;
    }
}
for (let i = 0; i <= 100; i++) {
    console.log(i, fizzbuzz(i))
}