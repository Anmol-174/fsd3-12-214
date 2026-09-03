import { EventEmitter } from "node:events";

const login = (name) => {
    console.log(`${name} logged in`);
};

const start = () => {
    console.log("System starts");
};

const working = (name) => {
    console.log(`${name} add items to cart`);
};

const checkout = (name) => {
    console.log(`${name} logged out`);
};

const task = new EventEmitter();

task.once("greet",start);
task.on("greet", login);
task.on("greet",login);
task.on("greet",working);
task.on("greet",checkout);
task.once("exit", () =>{
    console.log( "Systen shutting down");
});

task.emit("greet", "Anmol Prajapati");
task.emit("greet","Sarpanch");
task.off("greet",working);
task.emit("greet","Radhika");
task.emit("greet","Manager");
