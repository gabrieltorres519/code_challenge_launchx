class StudentService{

    static showAllStudents(students){
        return students;
    }

    static getEmailsCertified(students){
        const emailsCertified = students.map((stdnt)=>{
            if(stdnt.haveCertification === true){
                return stdnt.email;
            }
        })

        return emailsCertified
    }

    static getStudents500(students){
        const students500 = students.map((stdnt500)=>{
            if(stdnt500.credits > 500){
                return stdnt500;
            }
        })

        return students500
    }

}

module.exports = StudentService