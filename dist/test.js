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
test('demo', () => {
    expect(doSomething()).not.toBe(5);
    expect(doSomething()).toBe(3);
    expect(doSomethingElse()).toBe(5);
});
test('demo2', () => {
    expect(doSomething()).not.toBe(5);
    expect(doSomething()).toBe(3);
    expect(doSomethingElse()).toBe(5);
});
