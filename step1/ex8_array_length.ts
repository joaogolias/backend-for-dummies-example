let nameArray: string[] = ['Joao', 'Pedro', 'Soter']
let ageArray: number[] = [22, 21, 23]

for (let i = 0; i < nameArray.length ; i++) {
    let message: string = nameArray[1] + '. Age: ' + ageArray[1].toString()
    console.log(message)
}

export {}