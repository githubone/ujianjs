/// <reference path="../../../qunit.js" />
/// <reference path="../../../lib/store/store2.js" />

/*
  ======== A Handy Little QUnit Reference ========
  http://api.qunitjs.com/

  Test methods:
    module(name, {[setup][ ,teardown]})
    test(name, callback)
    expect(numberOfAssertions)
    stop(increment)
    start(decrement)
  Test assertions:
    ok(value, [message])
    equal(actual, expected, [message])
    notEqual(actual, expected, [message])
    deepEqual(actual, expected, [message])
    notDeepEqual(actual, expected, [message])
    strictEqual(actual, expected, [message])
    notStrictEqual(actual, expected, [message])
    throws(block, [expected], [message])
*/



module("lib store module");
test("store constructor", function () {
    var myType = typeof window.store;
    var store = window.store;
    ok(store);
    store.set("data", "testdata", false);
    var allstoredata = store.getAll();
    notEqual(allstoredata, null, "store should have data")
    var data = store.get("data");
    equal(data, "testdata", "should be equal")
}); 