const file = require('./json_example.json')
console.log(file)
console.log(file.database.students)
console.log(file.database.professors)

const database = JSON.parse(file.database)

