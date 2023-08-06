const namee = "Olha"
const age = 19
const subject = "Bio"

const school = {

    dismisseFromWork(teacher) {
        teacher.name = null
        teacher.age = null
        teacher.subject = null
    },
    cleanArray() {
        for (const teacherKey in this) {
            if (this.hasOwnProperty(teacherKey)) {
                const teacher = this[teacherKey];
                if (teacher && teacher.name === null && teacher.age === null && teacher.subject === null) {
                    delete this[teacherKey];
                }
            }
        }
    },
    teacher1: {
        name: "Anna",
        age: 30,
        subject: "English",
    },
    teacher2: {
        name: "Maria",
        age: 32,
        subject: "Math",
    },
    teacher3: {
        name: "Paulina",
        age: 55,
        subject: "WF"
    },
    teacher5: {
        namee: namee,
        age: age,
        subject: subject
    },


}

const teacher = "teacher4"
school[teacher] = { name: "Oksana", age: 44, subject: "Literature" }
school.dismisseFromWork(school.teacher3);
console.log(school)

school.cleanArray();
console.log("---------------------------------------------------")
console.log(school)
console.log("---------------------------------------------------")

/*
changeValues() {
    for (const teacher in this) {
        if (this.hasOwnProperty(teacher)) {
            if (teacher.name === null) {
                delete this.teacher
            }
        }
    }
}

*/