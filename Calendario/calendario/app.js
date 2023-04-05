let fs = require("fs");
const archivoTareas = require("./listadoTareas");

let modulo = require("./listadoTareas")

let misTareas = archivoTareas.lecturaTareas()

let tareasPendientes = misTareas.forEach(tarea => { console.log (tarea)});

