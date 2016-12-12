### Jasmine matchers

```
describe('jasmine matchers', function() {
  it('demonstrate use of built-in matchers', function() {
    expect(true).toBeTruthy();
    expect(false).not.toBeTruthy();
    expect(false).toBeFalsy();
    expect(true).not.toBeFalsy();
    expect({}).toBeDefined();
    expect(undefined).not.toBeDefined();
    expect(null).toBeNull();
    expect(undefined).not.toBeNull();
    expect({}).not.toBeNull();
    expect('Hello World!').toEqual('Hello World!');
    expect('Hello World!').not.toEqual('Goodbye!');
    expect('Hello World!').toNotEqual('Hi!');
    expect([1, 2, 3]).toEqual([1, 2, 3]);
    expect(1).toEqual(1);
    expect({ foo: 1 }).toEqual({ foo: 1 });
    expect(1.223).toBeCloseTo(1.22);
    expect(1.233).not.toBeCloseTo(1.22);
    expect(1.23326).toBeCloseTo(1.23324, 3);
    expect([1, 2, 3]).toContain(2);
    expect([1, 2, 3]).not.toContain(4);
    expect('Hello Jasmine').toMatch(/jasmine/i);
    expect('phone: 123-45-67').toMatch(/\d{3}-\d{2}-\d{2}/);
    expect(2).toBeGreaterThan(1);
    expect(2).toBeLessThan(3);
    expect(object.doSomething).toThrow(new Error("Unexpected error!"));
  });
});
```

### Mock add module
(1 - Blog)[http://prashantsahni.in/blog/2014/09/28/mocking-apis-integration-testing-with-protractor.html]
(2 - stack)[http://stackoverflow.com/questions/24244803/call-other-api-when-running-tests-using-protractor]
(3 - stack)[http://stackoverflow.com/questions/24259746/protractor-addmockmodule-and-httpprovider-interceptor/24263678#24263678]