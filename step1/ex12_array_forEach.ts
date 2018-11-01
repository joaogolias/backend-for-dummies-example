const nameArray: string[] = ['João', 'Pedro', 'Soter']
nameArray.forEach(
    (name, index, array) => {
        console.log('USER ' + (index+1).toString() + ':')
        console.log('       ' + name)
        if(index === array.length - 1) {
            console.log('END')
        }
    }
)
