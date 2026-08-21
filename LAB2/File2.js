import { readFile, appendFile, writeFile } from "fs/promises";
//if a function uses aawait keyword then the functuon must be Asyn

const readData = async (filename) => {
    try{
        const content = await readFile(filename, 'utf-8');
    return content;

    } catch (e){
        console.log( e.Message);
        console.log( "File not Found ");
        
    }
    finally {
        console.log( "Read data Finished");
    }
}
const writeData = async (filename, content) =>{
    try {
        await writeFile(filename, content);
    } catch (error) {
        console.log(error.message);
    }

}
const appendData = async ( filename, content) => {
   try {
     await appendFile( filename, content);
 
   } catch (error) {
    console.log(error.message);
    
   }
} 

const deleteFile  = async(Filename)=>{
    try {
        await unlink(filename);
        
    } catch (error) {
        console.log("File not Found");
        
    }
}

const data = await readData (" file1.js");
console.log(data);