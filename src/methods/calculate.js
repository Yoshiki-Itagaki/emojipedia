export default class calculate{

    // Not using an arrow function

    // function square(x){
    //   return x * x;
    // }
    //
    //const newNumbers  = numbers.map(function square(x){
    //   return x * x;
    // });
    // console.log(newNumbers);

    square(numbers){
        
        const newNumbers = numbers.map(x=> x * x);
        return newNumbers
    }


    //Map -Create a new array by doing something with each item in an array.
    multiplyByTwice(numbers){
        const twiceNumbers = numbers.map( x =>  x * 2);
        return twiceNumbers;
    }

    //Filter - Create a new array by keeping the items that return true.
    filter(numbers){
        const filteredNumbers = numbers.filter(num => num < 10);
        return filteredNumbers;
    }

    //Reduce - Accumulate a value by doing something to each item in an array.
    accumulate(numbers){
        const reducedNumbers = numbers.reduce((accumulator, currentNumber) => accumulator + currentNumber);
        return reducedNumbers;
    }

    //Find - find the first item that matches from an array.
    findItem(numbers){
        const locatedNumber = numbers.find(num => num > 10);
        return locatedNumber;
    }

    //FindIndex - find the index of the first item that matches.
    findIndexOfItem(numbers){
        const locatedIndex = numbers.findIndex(num => num > 10);
        return locatedIndex;
    }
}