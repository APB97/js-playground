"use strict";

function declaringBigInt() {
    // this cannot be stored accurately as Number
    const outsideRangeInt = 9999999999999999;
    console.assert(typeof(outsideRangeInt) === "number");
    console.log("Excpected:", "9999999999999999", "Actual:", outsideRangeInt);
    // BigInt can be defined with:
    const bigInt = 9999999999999999n;
    const bigIntFromInt = BigInt(1234556789);
    const bigIntFromString = BigInt("9999999999999999");
    console.assert(typeof(bigInt) === "bigint");
    console.assert(bigInt === bigIntFromString);
    console.assert(bigIntFromInt == 1234556789);
}

function noTypeMixingForBigInt() {
    try {
        console.log(99n + 1);
    } catch (error) {
        console.error(error);
    }
    console.log("Both operands have to be BigInt.");
    console.assert(99n + 1n === 100n);
}

function finished() {
    console.info("Program finished.");
}

declaringBigInt();
noTypeMixingForBigInt()
finished();
