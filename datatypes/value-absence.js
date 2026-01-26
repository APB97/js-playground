"use strict";

function nullKeyword() {
    console.assert(typeof(null) === "object");
    console.log("null represents intentionally defined absence of value.");
}

function undefinedKeyword() {
    console.assert(typeof(undefined) === "undefined");
    console.log(`undefined represents situations when value is just declared, 
or that result of an operation isn't a meaningful value.`);
}

function comparison() {
    console.assert(null == undefined);
    console.assert(null !== undefined);

    // null is a keyword, whereas undefined is a property of the global object,
    // so remember not to use undefined as an identifier
}

function finished() {
    console.info("Program finished.");
}

nullKeyword();
undefinedKeyword();
finished();
