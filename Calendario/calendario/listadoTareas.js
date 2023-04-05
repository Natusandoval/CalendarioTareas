let fs = require("fs");
const { json } = require("stream/consumers");

let archivoTareas = {
archivo:"./calendario/tareas.json",
lecturaTareas: function(){
let tareas = fs.readFileSync("tareas.json", "utf-8");
return JSON.parse(tareas);
}
}


module.exports = archivoTareas;
