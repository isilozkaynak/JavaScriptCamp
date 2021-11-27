//JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız. 
//Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız.
function findPrime(...numbers) {
    numbers.forEach(number => {
        let isPrimeNumber = true;

        if (number <= 1) {
            isPrimeNumber = false
        }

        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                isPrimeNumber = false
            }
        }

        if (isPrimeNumber == false) {
            console.log(number + " is not a prime number.")
        }
        else if (isPrimeNumber == true) {
            console.log(number + " is a prime number.")
        }
    })
}

findPrime(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 35)

//Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız.
function isAmicableNumber(number1, number2){
    let isAmicable=true
    totalNumber1=0;
    totalNumber2=0;

    for(let i=1; i<number1; i++){
        if(number1%i==0){
            totalNumber1+=i
        }
    }

    for(let j=1; j<number2; j++){
        if(number2%j==0){
            totalNumber2+=j
        }
    }

    if(number1==totalNumber2 && number2==totalNumber1){
        isAmicable=true
    }
    else {
        isAmicable=false
    }

    if(isAmicable==true){
        console.log(number1 + " and " + number2+ " are amicable numbers.")
    } else if(isAmicable==false){
        console.log(number1 + " and " + number2+ " are not amicable numbers.")
    }
}

isAmicableNumber(220,284)
isAmicableNumber(324, 684)
isAmicableNumber(1184, 1210)
isAmicableNumber(2620, 2924)
isAmicableNumber(5020, 5564)
isAmicableNumber(6232, 6368)
isAmicableNumber(10744, 10856)
isAmicableNumber(328, 667)
isAmicableNumber(12285, 14595)
isAmicableNumber(17296, 18416)
isAmicableNumber(63020, 76084)
isAmicableNumber(66928, 66992)



//1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.
function isPerfectNumber() {
    let isPerfectNumberItem=true
    let numbers = []
    //create an array from 1 to 1000
    for (let i = 1; i <= 1000; i++) {
        numbers.push(i)
    } 

    numbers.forEach(number => {
        let result = 2 * number
        let total=0

        for(let i=1; i<=number; i++){
            if(number%i==0){
                total+=i
            }
        }

        if(total!=result){
            isPerfectNumberItem=false
        }else if(result==total){
            isPerfectNumberItem=true
        }

        if(isPerfectNumberItem==false){
            console.log(number + " is not a perfect number.")
        }
        else if(isPerfectNumberItem==true){
            console.log(number + " is a perfect number.")
        }
    })
}

isPerfectNumber()

//1000'e kadarki tüm asal sayıları listeleyen programı yazınız.
function isPrime() {
    let array = [];
    //create an array(from 1 to 1000)
    for (let i = 1; i <= 1000; i++) {
        array.push(i)
    }

    array.forEach(item => {
        let isPrimeItem = true

        if (item <= 1) {
            isPrimeItem = false
        }

        for (let i = 2; i < item; i++) {
            if (item % i == 0) {
                isPrimeItem = false
            }
        }

        if (isPrimeItem == false) {
            console.log(item + " is not a prime number.")
        }
        else if (isPrimeItem == true) {
            console.log(item + " is a prime number.")
        }
    })
}

isPrime()