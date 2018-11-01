const validateUser1 = (name: string, email: string, password: string) => {
    if (name === undefined) {
        throw new Error('Name must be set')
    }

    if (email.indexOf('@') !== -1) {
        throw 'invalid email'
    }

    if (password.length < 6) {
        throw 0
    }
}



interface UserA {
    name: string
    email: string
    password: string
}