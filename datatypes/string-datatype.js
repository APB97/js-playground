"use strict";

function stringBasics() {
    console.assert("Hello" === 'Hello');
    console.assert("Hello" === `Hello`);

    let stringWithSingleQuotationInside = "I'm a string.";
    let stringWithDoubleQuotationInside = '"Indeed" I said.';

    let stringWithEscapedSingleQuotation = 'I\'m a string.';
    let stringWithEscapedDoubleQuotation = "\"Indeed\" I said.";

    console.assert(stringWithSingleQuotationInside === stringWithEscapedSingleQuotation);
    console.assert(stringWithDoubleQuotationInside === stringWithEscapedDoubleQuotation);
}

function stringObject() {
    console.assert('10' === String(10));
    console.assert('Hello' !== new String('Hello'));
}

function stringConcatenation() {
    console.assert("Hello " + "from JS" === "Hello from JS");
}

function stringLiterals() {
    let js = "JS";
    console.assert("Hello from JS" === `Hello from ${js}`);
    console.assert('2 + 3 = 5' === `2 + 3 = ${2 + 3}`);
    let multilineString = `Hello
    from
    JS`;
    console.info("Multiline string:", multilineString);
}

function stringTemplateLiteral() {
    const word = "word";

    function tagFunction(myStrings, myPlaceholder) {
        const initial = myStrings[0];
        console.log(myStrings);
        console.log(myPlaceholder);
        console.log(`${initial}modified ${myPlaceholder}.`);
    }

    tagFunction`I'm a ${word}`;
}

function finished() {
    console.info("Program finished.");
}

stringBasics();
stringObject();
stringConcatenation();
stringLiterals();
stringTemplateLiteral();
finished();
