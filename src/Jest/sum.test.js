const sum = require('./sum')

test("test whether sum of 2, 10 , 13 gives 25",()=>{
    expect(sum(2,10,13)).toBe(25)
})
