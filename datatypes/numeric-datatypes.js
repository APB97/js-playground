"use strict";

function creatingNumbers() {
    let integer = 10;
    let convertedInteger = Number("10");
    let numberObject = new Number("10");
    
    console.assert(integer === convertedInteger);
    console.assert(integer == numberObject);
    console.assert(integer !== numberObject);
}

function convertingToNumbers() {
    console.assert(Number(null) == 0);
    console.assert(Number(false) === 0);
    console.assert(Number(true) === 1);

    console.assert(isNaN(Number(undefined)));
    console.assert(isNaN(Number("Three")));

    console.assert(NaN !== NaN);
    console.assert(NaN != NaN);
}

function floatingPointNumbers() {
    console.assert(0.1 + 0.7 !== 0.8);
}

function numericOperators() {
    console.assert(2 + 3 === 5);
    console.assert(2 - 3 === -1);
    console.assert(2 * 3 === 6);
    console.assert(3 / 2 === 1.5);
    console.assert(2 ** 3 === 8);
    console.assert(3 % 2 === 1);
}

function symbolicNumberValues() {
    console.assert(10 / 0 === Infinity);
    console.assert(-10 / 0 === -Infinity);
    console.assert(Infinity > -Infinity);

    console.assert(isNaN(0 / 0));
    console.assert(isNaN(Math.sqrt(-1)));
    console.assert(isNaN(0 * Infinity));
    console.assert(isNaN(2 + NaN));
}

function finished() {
    console.info("Program finished.");
}

creatingNumbers();
convertingToNumbers();
floatingPointNumbers();
numericOperators();
symbolicNumberValues();

finished();
