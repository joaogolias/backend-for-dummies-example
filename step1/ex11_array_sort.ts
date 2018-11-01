const values: number[]  = [10, 6, 8, 11]
const ascendingOrder: number[] = values.sort(
    (valueA, valueB) => {
        if (valueA > valueB) {
            return 1
        } 
        if (valueA < valueB) {
            return -1
        }
        return 0
    }
)
console.log(ascendingOrder)

const descendingOrder: number[] = values.sort(
    (valueA, valueB) => {
        if (valueA > valueB) {
            return -1
        } 
        if (valueA < valueB) {
            return 1
        }
        return 0
    }
)

console.log(descendingOrder)

export {}