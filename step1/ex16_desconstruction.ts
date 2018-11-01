const validate = ({ name, email, password }: {name: string, email: string, password: string}): void  =>  {
    if (!name) {
        throw new Error('Name must be set')
    }

    if (email.indexOf('@') !== -1) {
        throw 'invalid email'
    }

    if (password.length < 6) {
        throw 0
    }
}

validate({
    name: '',
    email: 'joao',
    password: '12345'
})

