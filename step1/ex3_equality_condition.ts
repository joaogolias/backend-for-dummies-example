// let comparison: boolean
// comparison = 1 == true // => true
// comparison = 1 === true // => false

// comparison = 0 == false // => true
// comparison = 0 === false // => false

// comparison = '1' == 1 // => true
// comparison = '1' === 1 // => false

let comparator = (a: any, b: any): void => {
    console.log(`${a} == ${b}: `, a == b)
    console.log(`${a} === ${b} `, a === b)
}

comparator(1, true)
comparator(0, false)
comparator('1', 1)
