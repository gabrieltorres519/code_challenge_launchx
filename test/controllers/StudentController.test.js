const Reader = require("../../lib/utils/Reader");
const StudentController = require("../../lib/controllers/StudentController");

describe('Unit tests for StudentController Class',()=>{

    test('1) Use the StudentService method to obtain all the students',()=>{
        //Código de la app
        const students = StudentController.showAllStudents();

        //Validaciones
        expect(students).not.toBeUndefined()
        expect(students[0]).not.toBeUndefined()

    })

    test('2) Use the StudentService method to obtain all the emails of certified students',()=>{
        //Código de la app
        const emails = StudentController.showEmailsCertified();

        //Validaciones
        expect(emails).not.toBeUndefined()
        expect(emails[0]).toBe("Todd@visualpartnership.xyz")
        expect(emails[4]).toBeUndefined()

    })

    test('3) Use the StudentService method to obtain all the students with credits > 500',()=>{
        //Código de la app
        const  students500 = StudentController.showStudents500(); 

        //Validaciones
        expect(students500).not.toBeUndefined()
        expect(students500[2]).toBeUndefined()

    })

})