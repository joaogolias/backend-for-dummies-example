export interface User{
    name: string
    age: number
}

export interface Member {
    email: string
    sayHello(): void
    sayGoodBye(): void
}

export class Admin implements Member {
    constructor(
        public email: string
    ){}

    public sayHello() {
        console.log('Hello.')
    }

    public sayGoodBye() {
        console.log('GoodBye.')
    }
}

export class Student implements Member, User {
    constructor(
        public name: string,
        public age: number,
        public email: string,
        public classroom: string
    ) { }

    public sayHello() {
        let text: string = 'Hello, I am a student and I am '
        text += this.name + ' and '
        text += this.age.toString() + ' years old.'
        console.log(text)
    }

    public sayGoodBye() {
        console.log('GoodBye.')
    }
}

export class Professor implements Member, User {
    constructor(
        public name: string,
        public age: number,
        public email: string,
        public discipline: string
    ) { }

    public sayHello() {
        let text: string = 'Hello, I am a professor and I am '
        text += this.name + ' and '
        text += this.age.toString() + ' years old.'
        console.log(text)
    }

    public sayGoodBye() {
        console.log('GoodBye.')
    }
}
