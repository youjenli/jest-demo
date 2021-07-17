var doSomething;
var doSomethingElse;
/// <reference path="./global.ts" />
(function () {
    doSomething = () => {
        console.log('do something');
        return 3;
    };
    doSomethingElse = () => {
        console.log('do something else');
        return 5;
    };
})();
