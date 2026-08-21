import { writeFile,appendFile, readFile } from "fs/promises" ;

await writeFile("hello.txt" , "JS is very hard") ;


 await appendFile("hello.txt" , "\n Name : Sarpanch");
await appendFile("hello.txt" , "\n👌👌👌👌")

const content = await readFile("hello.txt" , "utf-8") ;
console.log(content) ;