const natalia = {
    name: 'Natalia',
    age: 20,
    cursosAprobados: [
        "Curso Definitivo de HTML y CSS",
        "Curso Practico de HTML y CSS",

    ],
    aprobarCurso(nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso);
    }
};


// Hacer que natalia aprenda otro curso

natalia.aprobarCurso("JS_Basico");


//creamos el primer prototipo

function Student(name, age, cursosAprobados){
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    
}

Student.prototype.aprobarCurso = function (nuevoCurso){
    this.cursosAprobados.push(nuevoCurso);
}

const juanita = new Student('Juanita', 20, ["Curso de JS", "Terminal y linea de comandos"]);


