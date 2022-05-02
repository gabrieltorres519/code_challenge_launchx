const StudentService = require("../../lib/services/StudentService");

describe('Unit tests for StudentService Class',()=>{
   
    test('1) Return all the students in the Json file as a service mediator',()=>{
        //Código de la app
            const Students = StudentService.showAllStudents("visualpartners.json");
            
        //Validaciones
        expect(Students).not.toBeUndefined()
        expect(Students[0]).not.toBeUndefined()
    })

    test("2) Obtaint students' emails if they have a certification",()=>{
        //Código de la app

        const emails = StudentService.getEmailsCertified("visualpartners.json");

        //Validaciones
        expect(emails).not.toBeUndefined()
        expect(emails[0]).toBe("Todd@visualpartnership.xyz")
    })
})