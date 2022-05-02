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
        expect(emails[4]).toBeUndefined()

    })

    test("3) Obtain students with credits > 500",()=>{
        //Código de la app
        const  students500 = StudentService.getStudents500("visualpartners.json"); 

        //Validaciones
        expect(students500).not.toBeUndefined()
        expect(students500[2]).toBeUndefined()

    })
 
})