

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    const { sum } = require('./app.js')
    let total = sum(14, 9);
    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    const { fromEuroToDollar } = require('./app.js')
    const dollars = fromEuroToDollar(3.5)
    const expected = 3.5 * 1.2; 
     expect(fromEuroToDollar(3.5)).toBe(4.2);
});

test("One dollar should be 130.96 yen", function(){
    const { fromDollarToYen } = require('./app.js')

    const dollars = fromDollarToYen(5)

    const expected = (5 * 130.96).toFixed(1); 
    
     expect(fromDollarToYen(5)).toBe("654.8");
})

test("One yen should be 0.0061 pound", function(){
    const { fromYenToPound } = require('./app.js')

    const dollars = fromYenToPound(3)

    const expected = 3 * 0.0061; 
    
     expect(fromYenToPound(3)).toBe(0.0183);
})