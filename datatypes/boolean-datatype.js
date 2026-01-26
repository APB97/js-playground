"use strict";

function coercion() {
    // these values coerce to false
    console.assert(Boolean(NaN) === false);
    console.assert(Boolean(0) === false);
    console.assert(Boolean(-0) === false);
    console.assert(Boolean(null) === false);
    console.assert(Boolean(undefined) === false);
    console.assert(Boolean("") === false);

    // these values coerce to true, including string with textual representation of false
    console.assert(Boolean("false") === true);
    console.assert(Boolean(5) === true);
    console.assert(Boolean(-6) === true);
    console.assert(Boolean([]) === true);
    console.assert(Boolean([0]) === true);
}

function constructorIssues() {
    // It's better not to use the constructor
    console.assert(new Boolean(false) !== false);
    console.assert(new Boolean(true) !== true);
    console.assert(!!new Boolean(false) !== false);
}

function finished() {
    console.info("Program finished.");
}

coercion();
constructorIssues();
finished();
