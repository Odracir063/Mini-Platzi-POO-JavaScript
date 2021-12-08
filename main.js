class Comment {

    constructor({
        content,
        studentName,
        studentRole = "estudiante",
    }){
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.likes = 0;
    }

    publicar(){
        console.log(this.studentName + "(" + this.studentRole + ")");
        console.log(this.likes + " likes");
        console.log(this.content);
    }
}



function videoPlay(id){
    const urlSecreta = "https://platzimassecretoquelanasa.com" +  id;
    console.log("Se esta reproduciendo desde la url " + urlSecreta);
}

function videoStop(id){
    const urlSecreta = "https://platzimassecretoquelanasa.com" +  id;
    console.log("Pausamos la url " + urlSecreta);
}

class PlatziClass{
    constructor({
        name,
        videoID,
        comments = [],
    }){
        this.name = name;
        this.videoID = videoID;
        this.comments = comments;
    }

    addComment(comment){
        this.comments.push(comment);
    }
    addVideo(video){
        this.videoID = video;
    }
    reproducir(){
        videoPlay(this.videoID);
    }

    pausar(){
        videoStop(this.videoID);
    }
}

class Course {
    constructor({
        name,
        isFree = false,
        lang = "spanish",
        classes = [],
    }){
        this._name = name;
        this.classes = classes;
        this.isFree = isFree;
        this.lang = lang;
    }

    get name(){
        return this._name;
    }

    set name(name){
        if (name === "Curso Malito de Fundamentos de Javascript"){
            console.error("Web... no");
        }else{
            this._name = name;
        }
    }
}

const cursoFundamentosJS = new Course({
    name: "Curso de Fundamentos de Javascript",
    isFree: true,
})

const cursoHTMLyCSS= new Course({
    name: "Curso de HTML y CSS",
    lang: 'english',
});

const cursoPracticoHTMLyCSS= new Course({
    name: "Curso practico de HTML y CSS",
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

    publicarComentario(commentContent){
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
        });
        comment.publicar();
    }

}

class FreeStudent extends Student{
    constructor(props){
        super(props);
    }

    approveCourse(newCourse){
        if(newCourse.isFree){
            this.approvedCourses.push(newCourse);
        }else{
            console.warn("Lo sentimos, " + this.name + ", solo puedes tomar cursos abiertos")
        }
    };
}

class BasicStudent extends Student{
    constructor(props){
        super(props);
    }
    approveCourse(newCourse){
        if(newCourse.lang !== "english"){
            this.approvedCourses.push(newCourse);
        }else{
            console.warn("Lo sentimos, " + this.name + ", solo puedes tomar cursos en espanhol")
        }
    };
}


class ExpertStudent extends Student{
    constructor(props){
        super(props);
    }
    approveCourse(){
        this.approveCourses.push(newCourse);
    }
    
}

class TeacherStudent extends Student{
    constructor(props){
        super(props);
    }
    approveCourse(){
        this.approveCourses.push(newCourse);
    }

    publicarComentario(commentContent){
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
            studentRole: "profesor",
        })
        comment.publicar();
    }
    
}



const freddy = new TeacherStudent({
    name: "Freddy Vega",
    email: "Freddy@gmail.com",
    username: "Freddy3000",
    age: 34,
    twitter: "freddier",
})



const juan = new BasicStudent({
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

const miguelito = new FreeStudent({
    name: "Miguel",
    email: "miguelito@gmail.com",
    username: "miguelote",
    age: 21,
    twitter: "fmiguelito",
    learningPaths: [
        escuelaDesarrolloWeb,
    ],
})