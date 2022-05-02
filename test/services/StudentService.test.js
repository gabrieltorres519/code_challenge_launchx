const StudentService = require("../../lib/services/StudentService");

describe('Unit tests for StudentService Class',()=>{
    test('1) Return all the students in the Json file as a service mediator',()=>{
        //Código de la app
            const Students = StudentService.showAllStudents("visualpartners.json");
            
        //Validaciones
        expect(Students).not.toBeUndefined()
        expect(Students[0]).not.toBeUndefined()
    })
})