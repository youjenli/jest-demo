var doSomething;
var doSomethingElse;
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
