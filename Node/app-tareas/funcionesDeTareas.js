const fs = require("fs")

let archivoDeTareas= {
    archivo: "tareas.json", 
    leerArchivo: function (){
        let tareas=fs.readFileSync("tareas.json", "utf-8")
        return JSON.parse(tareas)
    }
}

console.log (archivoDeTareas)

module.exports = archivoDeTareas;