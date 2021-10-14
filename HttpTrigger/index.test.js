const functions= require('./index');
const context = require('../testing/context');
const { test } = require('@jest/globals');

test('Http trigger', async () => {
    const request = {
        query: { name: 'schuc'}
    };

    var iteration = 1000000;
    console.time('Function #1');
    for(var i = 0; i<iteration; i++){
        await functions(context, request);
    }
    console.timeEnd('Function #1');

    // await functions(context, request);
    expect(context.res.body).toContain('H');
    expect(context.res.body).toEqual('Hello, schuc');
    // expect(context.log.mock.calls.length).toBe(200);
});
