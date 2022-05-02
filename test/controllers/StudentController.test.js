describe('Unit tests for StudentController Class',()=>{

    test('1) Use the StudentService method to obtain all the students',()=>{
        //Código de la app
        const students = StudentController.showAllStudents();

        //Validaciones
        expect(Students).not.toBeUndefined()
        expect(Students[0]).not.toBeUndefined()

    })

})