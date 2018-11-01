export class User {
    constructor(
        public name: string,
        protected age: number,
        private email: string,
    ) {}
    public sayHello() {
        let text: string = 'Hello, I am '
        text += this.name + ' and '
        text += this.age.toString() + ' years old.'
        console.log(text)
    }

    public getEmail() { //getter de Email
        return this.email
    }

    public setAge(age: number) { //setter de Age
        this.age = age
    }

    public getAge() { //getter de Age
        return this.age
    }
}

export class Student extends User {
    constructor(
        name: string,
        age: number,
        email: string,
        public classroom: string
    ) {
        super(name, age, email)

        this.age = age //Sem erro é protected

        // this.email //Erro. é private
    }
}

export class Professor extends User {
    constructor(
        name: string,
        age: number,
        email: string,
        public discipline: string
    ) {
        super(name, age, email)


        this.age = age //Sem erro é protected
        
        // this.email //Erro. é private
    }
}

const student = new Student('Pedro', 21, 'Class A', 'pedro@appsimples.com')
student.sayHello()

const professor = new Professor('Soter', 23, 'Backend', 'soter@appsimples.com')
professor.sayHello()