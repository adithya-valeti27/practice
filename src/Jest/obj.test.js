const namesList = require('./obj')

test("whether the array has the name Adithya",()=>{
    const names = namesList.map(item=>item.name)
    expect(names).toContain("Adithya")
})

test("whether there is a job id of 3",()=>{
    const ids = namesList.map(unqid=>unqid.id)
    expect(ids).toContain(3)
})