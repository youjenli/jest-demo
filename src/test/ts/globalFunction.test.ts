
test('demo', () => {
    expect(doSomething()).not.toBe(5);
    expect(doSomething()).toBe(3);
    expect(doSomethingElse()).toBe(5);
});