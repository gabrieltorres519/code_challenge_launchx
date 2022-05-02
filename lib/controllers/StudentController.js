const StudentService = require("../../lib/services/StudentService");
const Reader = require("../utils/Reader");

class StudentController{

    static showAllStudents(){
        const students = Reader.readJsonFile("visualpartners.json");
        return StudentService.showAllStudents(students)
    }

    static showEmailsCertified(){
        const students = Reader.readJsonFile("visualpartners.json");
        return StudentService.getEmailsCertified(students)
    }

}

module.exports = StudentController