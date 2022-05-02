const Reader = require("../utils/Reader");

class StudentService{

    static showAllStudents(path){
        const students = Reader.readJsonFile(path);

        return students;
    }

    static getEmailsCertified(path){
        const students = Reader.readJsonFile(path);

        const emailsCertified = students.map((stdnt)=>{
            if(stdnt.haveCertification === true){
                return stdnt.email;
            }
        })

        return emailsCertified
    }

}

module.exports = StudentService