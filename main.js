class Class{
    constructor({
        name,
        video,
        comments = [],
    }){
        this.name = name;
        this.video = video;
        this.comments = comments;
    }

    addComment(comment){
        this.comments.push(comment);
    }
    addVideo(video){
        this.video = video;
    }
}

class Course {
    constructor({
        name,
        classes = [],
    }){
        this.name = name;
        this.classes = classes;
    }
}

const cursoFundamentosJS = new Course({
    name: "Curso de Fundamentos de Javascript",
})

const cursoHTMLyCSS= new Course({
    name: "Curso de HTML y CSS"
});

const cursoPracticoHTMLyCSS= new Course({
    name: "Curso practico de HTML y CSS"
});

class LearningPaths {
    constructor({
        name,
        courses = [],
    }){
        this.name = name;
        this.courses = courses;
    }

    addCourse(course){
        this.courses.push(course);
    }
}

const escuelaDesarrolloWeb = new LearningPaths({
    name: 'Escuela de Desarrollo Web',
    courses: [
        cursoFundamentosJS,
        cursoHTMLyCSS,
        cursoPracticoHTMLyCSS,
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