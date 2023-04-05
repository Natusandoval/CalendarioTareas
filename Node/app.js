let fs = require ("fs"); 

/*console.log (fs)
const natalia = require("./node_modules/natalia_sandoval")
console.log ("Hola soy" + " " + natalia[0] + " " + "Me gusta" +" " + natalia[1] + "vivo en"+ " " +natalia[2]);
*/

/*const tareasJSON = fs.readFileSync("./app-tareas/tareas.json", {encoding: "utf-8"})

const tareas = JSON.parse (tareasJSON)

let accion = process.argv[2]

switch (accion) {
   case "listar": console.log(tareas)
   break;
   case undefined: console.log("Atención: tienes que pasar una acción")
   break;
   default: console.log ("No entiendo que quiere hacer")
   break;
}

console.log(accion)

*/

let tareas = require("./app-tareas/funcionesDeTareas")

let arrayDeTareas = tareas.leerArchivo();
