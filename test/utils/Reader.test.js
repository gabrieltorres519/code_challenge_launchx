const Reader = require("../../lib/utils/Reader");

describe('Unit tests for Reader Class',()=>{
    
    test('1) Functionality to read the Json "Database" of students and obtain them all',()=>{
        //Código de la app
        const Students = Reader.readDBFile("visualpartners.json");
        
        //Validaciones
        expect(Students).not.toBeUndefined()
    })

})