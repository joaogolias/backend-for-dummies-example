export class User {
    constructor(
        name: string,
        age: number
    ) {
        this.name = name
        this.age = age
    }
    public name: string
    public age: number
    public sayHello() {
        let text: string = 'Hello, I am '
        text += this.name + ' and '
        text += this.age.toString() + ' years old.'
        console.log(text)
    }
}

/***************** OUTRA FORMA  *****************
export class User {
    constructor(
        public name: string,
        public age: number
    ) {}
    public sayHello() {
        let text: string = 'Hello, I am '
        text += this.name + ' and '
        text += this.age.toString() + ' years old.'
        console.log(text)
    }
}
/************************************************/

const myUser = new User('Goli', 22)
myUser.sayHello()