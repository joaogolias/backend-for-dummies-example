const values: number[]  = [10, 6, 8, 11]
const ascendingOrder: number[] = values.sort(
    (valueA, valueB) => {
        return valueA > valueB ? 1 : (valueA < valueB ? -1 : 0) 
    }
)
console.log(ascendingOrder)

const descendingOrder: number[] = values.sort(
    (valueA, valueB) => {
        return valueA > valueB ? -1 : (valueA < valueB ? 1 : 0) 
})

console.log(descendingOrder)

export{}