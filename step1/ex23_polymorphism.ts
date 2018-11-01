import { Student, Professor, Admin, Member } from './ex22_interface'

const student = new Student('Joao', 22, 'joao@appsimples.com', 'Class A')
const professor = new Professor('Pedro', 21, 'pedro@appsimples.com', 'backend')
const admin = new Admin('admin@appsimples.com')
let memberArray: Member[] = [student, professor, admin]

memberArray.forEach((member: Member) => {
    member.sayHello()
})