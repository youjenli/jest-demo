var doSomething;
var doSomethingElse;
/// <reference path="./global.ts" />
(function () {
    doSomething = () => {
        console.log('do something');
    };
    doSomethingElse = () => {
        console.log('do something else');
    };
})();
