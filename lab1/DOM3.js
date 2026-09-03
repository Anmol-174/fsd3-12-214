 import { EventEmitter } from "events";
 const button = new EventEmitter();

 button.on("click", (uname) =>{
    console.log( `button clicked by ${uname}`)
 })

 button.emit("click", "Anmol");
 button.emit("click", "Sarpanch");
 button.emit("click", "Radhika");
 button.emit("click");