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

    static getStudents500(path){
        const students = Reader.readJsonFile(path);

        const students500 = students.map((stdnt500)=>{
            if(stdnt500.credits > 500){
                return stdnt500;
            }
        })

        return students500
    }

}

module.exports = StudentService