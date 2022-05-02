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

})