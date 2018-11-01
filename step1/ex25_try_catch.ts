const validateUser = (name: string, email: string, password: string) => {
    if (!name)  {
        throw new Error('Name must be set')
    }

    if (email.indexOf('@') === -1) {
        throw 'invalid email'
    }

    if (password.length < 6) {
        throw 0
    }
}

try {
    validateUser('', 'email', '123456')
} catch (e){
    let message: string = 'An error occured.'

    if (e.message) {
        message += ' Code: ' + e.message
    } else {
        message += ' Code: ' + e
    }
    console.log(message)
}



