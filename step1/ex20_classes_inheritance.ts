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

export class Student extends User {
    constructor(
        name: string,
        age: number,
        public classroom: string
    ) {
        super(name, age)
    }
}

export class Professor extends User {
    constructor(
        name: string,
        age: number,
        public discipline: string
    ) {
        super(name, age)
    }
}

const student = new Student('Pedro', 21, 'Class A')
student.sayHello()

const professor = new Professor('Soter', 23, 'Backend')
professor.sayHello()

export {}