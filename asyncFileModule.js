const { readFile } = require("fs")

console.log('start');

const start = async () => {
    try{
        const fileData = await readFile('./FSModuleFiles/firstFile.txt','utf-8',(error, data) => {
            if(error){
                console.log(error);
            }
            console.log(data);
        })
    }
    catch{
        console.log("error");
    }
}

start();