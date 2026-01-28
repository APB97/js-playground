"use strict";

function definingSymbols() {
    console.assert(Symbol() != Symbol());
    console.assert(Symbol() !== Symbol());
    console.log("All symbols are considered different, even if created with the same description.");
}

function symbolsAsKeys() {
    const key = Symbol("MyKey");
    const dictionaryObj = {};
    dictionaryObj[key] = "value for key";
    const differentKey = Symbol("MyKey");
    console.assert(dictionaryObj[key] !== dictionaryObj[differentKey]);
    console.log("Symbols can be used as unique keys, even if their descriptions are the same.");
}

function accessingSymbolDescription() {
    let mySymbol = Symbol("Unique");
    console.assert(mySymbol.description === "Unique");
}

function symbolIsNotAConstructor() {
    try {
        let mySymbol = new Symbol();
        console.log("If execution gets here, it means Symbol is a constructor... (It isn't).");
    } catch (error) {
        console.error(error);
    }
}

function sharedSymbols() {
    let sharedSymbol = Symbol.for('SharedKey');
    console.log("Shared symbol is equal to another Symbol.for() result.");
    console.assert(sharedSymbol === Symbol.for('SharedKey'));
    console.log("Retrieve key for shared symbol by using Symbol.keyFor().");
    console.assert(Symbol.keyFor(sharedSymbol) === 'SharedKey');
    console.log("Symbols created manually are never equal to shared symbol, even if they have the same content.");
    console.assert(Symbol('SharedKey') !== Symbol.for('SharedKey'));
}

function staticSymbols() {
    console.log(Symbol.asyncIterator);
    console.log(Symbol.hasInstance);
    console.log("... and others");
    console.assert(String.prototype.match !== Symbol.match);
}

function finished() {
    console.info("Program finished.");
}

definingSymbols();
symbolsAsKeys();
accessingSymbolDescription();
symbolIsNotAConstructor();
sharedSymbols();
staticSymbols();
finished();
