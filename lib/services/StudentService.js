const Reader = require("../utils/Reader");

class StudentService{

    static showAllStudents(path){
        const students = Reader.readJsonFile(path);

        return students;
    }

}

module.exports = StudentService