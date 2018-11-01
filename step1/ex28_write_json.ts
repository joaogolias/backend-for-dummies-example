import * as fs from 'fs'
import { Student, Professor } from './ex21_encapsulation'

const joao = new Student('Joao',22,'joao@appsimples.com', 'Class B')
const pedro = new Professor('Pedro',21,'pedro@appsimples.com','Backend')

const db = {
    database: {
        students: [ 
            {
                "1": {
                    ...joao
                }
            }
        ],
        professors: [ 
            {
                "2": {
                    ...pedro
                }
            }
        ],
    }
}

const data = JSON.stringify(db)
fs.writeFile('./json_example2.json', data, (err) => {
    console.log(err)
})