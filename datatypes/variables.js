"use strict";

function letVsVarVsConst() {
    try {
        console.log(a);
    } catch (error) {
        // cannot use undeclared variable
        console.error(error);
    }

    // preferred
    let a;
    // not recommended
    var b;

    console.assert(a === undefined);
    console.assert(b === undefined);

    // can redeclare var variable
    var b;

    try {
        let a;
    } catch (error) {
        // cannot redeclare let variable
        console.error(error);
    }

    const c = 3;
    try {
        c = 4;
    } catch (error) {
        // cannot reassign to const variable
        console.error(error);
    }

    // const object properties can be altered
    const obj = { "counter": 0};
    obj.counter++;
    console.assert(obj.counter === 1);
}

function scopes() {
    {
        let a;
        {
            // a is available
            console.log(a);
        }
    }

    try {
        console.log(a);
    } catch (error) {
        // a is not available
        console.error(error);
    }

    function fScope() {
        var scoped = 0;
    }

    fScope();
    
    try {
        console.log(scoped);
    } catch (error) {
        // scoped is not available
        console.error(error);
    }
}

function finished() {
    console.info("Program finished.");
}

letVsVarVsConst();
scopes();

var globalVar;
let globalLet;

{
    console.assert(globalVar === undefined);
    console.assert(globalLet === undefined);
    
    global = "global";
}
console.assert(global === "global");

finished();
