class LearningPaths {
    constructor({
        name,
        courses = [],
        students = [],
    }){
        this.name = name;
        this.courses = courses;
        this.students = students;
    }

    addStudent(student){
        this.students.push(student);
    }

    addCourse(course){
        this.courses.push(course);
    }
}

const escuelaDesarrolloWeb = new LearningPaths({
    name: 'Escuela de Desarrollo Web',
    courses: [
        'Fundamentos de JavaScript',
        'Curso de HTML y CSS',
        'Curso Practico de HTML y CSS'
    ],
});

const escuelaComputerScience = new LearningPaths({
    name: 'Escuela de Computer Science',
    courses: [
        'Fundamentos de la Ingenieria de Software',
        'Curso de fundamentos matematicos',
        'Curso de calculo integral',
        'Curso de programacion estructurada'
    ],
});


class Student{
    constructor({
        name,
        username,
        age,
        email,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
    }){
        this.name = name;
        this.username = username;
        this.age = age;
        this.email = email;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        }
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }
}

const juan2 = new Student({
    name: "Juan",
    email: "juanpepe@gmail.com",
    username: "JuanPepe3000",
    age: 34,
    twitter: "fjuandc",
    learningPaths: [
        escuelaComputerScience,
        escuelaDesarrolloWeb,
    ],
})

const miguelito2 = new Student({
    name: "Miguel",
    email: "miguelito@gmail.com",
    username: "miguelote",
    age: 21,
    twitter: "fmiguelito",
    learningPaths: [
        escuelaDesarrolloWeb,
    ],
})