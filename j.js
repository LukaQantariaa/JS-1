function getDatabase(){

    const students = {
        
    }

    const subjects = {

    }

    const studentsToSubject = [
        
    ]

    return {
        addStudent,
        getAllStudents,
        getStudentById,
        updateStudent,
        removeStudent,
        addSubject,
        getSubjects,
        addStudentToSubject,
        getSubjectsForStudent
    }
    
    function addStudent(id, data){
        if( !students[id] ) {
            data['id'] = id;
            students[id] = data;
        }
    }

    function updateStudent(id, data){
        if( students[id] ) {
            data['id'] = id;
            Object.keys(students[id]).forEach(function(key) {
                if( data[key] ) {
                    students[id][key] = data[key]
                } else {
                    
                }
            });
            console.log('student № ' + id + ' updated!');
        } else {
            console.log('Student № ' + id + ' does not exist');
        }
    }

    function getAllStudents(){
        return students
    }

    function getStudentById(id){
        return students[id];
    }

    function removeStudent(id){
        if(students[id]){
            delete students[id];
        } else {
            console.log('student № ' + id + ' does not exist');
        }
    }

    function addSubject(code, title){
        if( !subjects[code] ) {
            const obj = {
                'title': title,
                'code': code
            }
            subjects[code] = obj;
        } 
    }

    function getSubjects(){
        return subjects
    }

    function addStudentToSubject(id, code){
        const obj = {
            "studentId": id,
            'subjectCode': code
        }

        studentsToSubject.push(obj);
    }

    function getSubjectsForStudent(id){
        let result = []
        studentsToSubject.forEach( (data) => {
            if(data.studentId == id) {
                result.push(data.subjectCode);
            }
        });
        return result;
    }

}


