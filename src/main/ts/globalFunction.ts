/// <reference path="./global.ts" />

(function(){
    doSomething = ():number => {
        console.log('do something');
        return 3;
    }

    doSomethingElse = ():number => {
        console.log('do something else');
        return 5;
    }
})()