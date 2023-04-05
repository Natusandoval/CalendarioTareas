const { transferableAbortSignal } = require("util");
const { archivo } = require("./listadoTareas");
const fs = require("fs");

let nuevaTarea = {
    archivo: "tareas.json",
    escribirJson: function(tareas){
        return JSON.stringify(tareas),
        fs.writeFileSync("tareas", tareas, "utf-8")
    },
    guardarTarea: function(tarea){
       fs.readFile("tareas.json")

       
    }
}
